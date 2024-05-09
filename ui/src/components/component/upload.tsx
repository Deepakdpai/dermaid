import { Input } from "../ui/input"
import { Button } from "../ui/button"

import { useAppContext } from "./context"

export function Upload() {
  const { setImage } = useAppContext()

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e?.target?.files)
    console.log("files:", files)
    const file = files[0]
    const reader = new FileReader()
    reader.addEventListener("load", () => {
      const result = reader.result
      if (typeof result === "string") {
        setImage(result)
      }
    })

    reader.readAsDataURL(file)
  }

  return (
    <>
      <div>
        <Input type="file" onChange={handleFileSelected} />
      </div>
      <Button className="w-full" size="sm" variant="outline">
        Upload Image
      </Button>
    </>
  )
}
