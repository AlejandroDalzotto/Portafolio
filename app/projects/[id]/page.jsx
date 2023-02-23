import data from '@/data.json' assert { type: 'JSON' };
import DetailsProject from "@/components/DetailsProject"

export default function page({ params }) {
    const { id } = params

    return (
        <div className="min-h-[calc(110vh+80px)] px-4">
            <DetailsProject id={id} />
        </div>
    )
}