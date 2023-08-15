export default function EditTopicForm() {
    return(
        <form action="Post" className="flex flex-col gap-4 my-3">
            <input type="text" className="border border-slate-500 px-6 py-2 " placeholder="Topic Title"/>
            <input type="text" className="border border-slate-500 px-6 py-2 " placeholder="Topic Description"/>
            <button className="bg-green-500 text-white w-fit font-bold py-2 px-8">Update Topic</button>

        </form>
    )
}