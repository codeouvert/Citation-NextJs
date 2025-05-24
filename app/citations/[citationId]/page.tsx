import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";
import { prisma } from "@/src/lib/prisma";

export default async function Page(props: {
  params: Promise<{
    citationId: string;
  }>;
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  const params = await props.params;
  const citationId = params.citationId;
  // const searchParams = await props.searchParams;
  const citation = await prisma.citation.findFirst({
    where: {
      id: Number(params.citationId),
    },
  });

  if (!citation) {
    return (
      <Card className="">
        <CardHeader>
          <CardTitle>The citation {citationId} not exist.</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="min-h-full flex items-center justify-center">
    <Card className="p-4 flex items-start gap-4 flex-1" key={citation.id}>
      <div className="flex flex-col gap-2">
        {/* <p className="relative pl-8 italic before:content-['“'] before:absolute before:left-0        after:content-['”'] buttom-0              after:text-4xl after:text-gray-400"> */}
        <p className="relative pl-8 italic before:content-['“'] before:absolute before:left-0 before:text-4xl before:text-gray-400 after:content-['”'] after:absolute after:right-4xl buttom-0 after:text-4xl after:text-gray-400">
          {citation.text}
        </p>
        <p>-- {citation.author}</p>
      </div>
    </Card>
    </div>
  );
}
