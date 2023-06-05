export function List({tasks}) {
  console.log(tasks.length)
  return (
    <>
      {tasks.map((item: any, index: number) => {
        return (
          <div>
            <span key={index + 1}>{item.content}</span>
          </div>
        )
      })}
    </>
  )
}
