
import { PROJECTS } from "@/data"
import DetailsProject from "@/components/DetailsProject"

export default function page(props: any) {
  const { id } = props.params
  const project = PROJECTS[id - 1]

  return (
    <div className="min-h-[calc(110vh+80px)] px-4">
      <DetailsProject project={project} />
    </div>
  )
}
