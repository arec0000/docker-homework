interface Data {
    data: {
        attributes: {
            title: string
            description: string
        }
    },
}

export default async function Main() {
    const res = await fetch(`http://62.84.127.229/api/data`, {
        next: {
            revalidate: 2
        }
    });

    const { data: { attributes } } = await res.json() as Data;

    return (
        <div className="fixed left-[50%] top-[50%] bg-slate-300 min-w-[400px] translate-x-[-50%] translate-y-[-50%] p-5 rounded-3xl">
            <h1 className="mb-2 text-xl">{data.attributes.title}</h1>
            <p>{data.attributes.description}</p>
        </div>
    )
}