import { buttonVariants } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import { DeleteCitationButton } from "./delete-citation-button";

export default async function Page() {
  // await new Promise(r => setTimeout(r, 1000));
  // throw new Error("Invalide pathname");
  const citations = await prisma.citation.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>URL : /admin</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {citations.map((citation) => (
          <Card className="p-4 flex items-start gap-4 flex-1" key={citation.id}>
            <div className="flex flex-col gap-2">
              {/* <p className="relative pl-8 italic before:content-['“'] before:absolute before:left-0        after:content-['”'] buttom-0              after:text-4xl after:text-gray-400"> */}
              <p className="relative pl-8 italic before:content-['“'] before:absolute before:left-0 before:text-4xl before:text-gray-400 after:content-['”'] after:absolute after:right-4xl buttom-0 after:text-4xl after:text-gray-400">
                {citation.text}
              </p>
              <p>-- {citation.author}</p>
            </div>

            <div className="flex flex-col gap-2">
              <DeleteCitationButton id={citation.id} />

              <Link
                href={`/admin/citations/${citation.id}`}
                className={buttonVariants({ size: "sm", variant: "outline" })}
              >
                Edit
              </Link>

              <Link
                href={`/citations/${citation.id}`}
                className={buttonVariants({ size: "sm", variant: "outline" })}
              >
                Share
              </Link>
            </div>
          </Card>
        ))}
        <Link
          href="/admin/citations/new"
          className={buttonVariants({ size: "lg", variant: "outline" })}
        >
          Create Citation
        </Link>
      </CardContent>
    </Card>
  );
}
