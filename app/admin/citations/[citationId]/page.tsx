import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";
import { prisma } from "@/src/lib/prisma";
import { CitationForm } from "../citation-form";

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

  return <CitationForm citation={citation} />;
}
