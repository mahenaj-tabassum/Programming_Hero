import CardDetails from "@/components/CardDetails";
import type { CardData } from "@/types/CardData";
import { notFound } from "next/navigation";

const CardData = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data: CardData[] = await response.json();
  return data;
};

const ExerciseDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const cardInfos: CardData[] = await CardData();
  const exercise = cardInfos.find((item) => Number(id) === item.id);

  if (!exercise) return notFound();

  return (
    <div>
      <CardDetails exercise={exercise} />
    </div>
  );
};

export default ExerciseDetailsPage;
