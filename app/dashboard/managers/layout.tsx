import ManagerCard from "./_components/ManagerCard";

export default function LayoutManager({children,count}:{children: React.ReactNode,count: React.ReactNode}) {
    return ( 
        <>
    <div className="w-4/12 max-h-[90vh] h-[90vh] overflow-hidden overflow-y-auto">

        <ManagerCard />
    </div>
        <div className="w-7/12 flex flex-col justify-center gap-20">
            <div>
            {children}
            </div>
            <div>
            {count} 
            </div>
        </div>
        </>
    )
}