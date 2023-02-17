export default function Option({children,data}){
    return (
        <div className="group relative">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>

            <div
                className="relative flex h-full transform items-end border-2 border-black bg-white group-hover:bg-transparent transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
            >
                <div
                    className="flex justify-center items-center transition-opacity group-hover:absolute group-hover:opacity-0"
                >
                    {children}
                </div>

                <div
                    className="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 "
                >
                    <p className="mt-4 text-xl font-bold ">
                        {data}
                    </p>
                </div>
            </div>
        </div>


    )
}