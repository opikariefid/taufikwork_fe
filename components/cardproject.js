import { Button, Card, CardContent, Link } from "@mui/material";

export default function CardProject({ data }) {
  return (
    <Card className="shadow-project-card rounded-xl">
      <CardContent className="h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="mb-2 h-[200px] overflow-hidden">
              {
                data.img == '' ? (
                  <div className="h-full w-full flex items-center justify-center bg-zinc-100 text-lg">
                    No Image
                  </div>
                ) : (
                  <img draggable={false} className="w-full h-full object-cover" src={data.img}></img>
                )
              }
            </div>
            <div className="font-quicksand my-2">
              <div className="text-base underline">Client</div>
              <div className="text-lg font-bold leading-tight">{data.client}</div>
            </div>
            <div className="font-quicksand my-2">
              <div className="text-base underline">Project</div>
              <div className="text-lg font-bold leading-tight">{data.project}</div>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {
                data.language.map((list, index) => (
                  <Button disableElevation variant="contained" className="text-sm px-2 py-1 capitalize rounded-full">{list}</Button>
                ))
              }
            </div>
          </div>
          <div className={`mt-2 flex justify-end ${data.link == '' ? 'hidden' : 'block'}`}>
            <Link href={data.link} target="_blank">
              <Button disableElevation className="capitalize text-base underline font-bold font-quicksand text-black">Visit Link</Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}