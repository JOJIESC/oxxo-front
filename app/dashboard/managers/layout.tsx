import ManagerCard from "./_components/ManagerCard";

export default function LayoutManager({children}:{children: React.ReactNode}) {
    return ( 
        <>
    <div className="w-4/12 max-h-[90vh] h-[90vh] overflow-hidden overflow-y-auto">

        <ManagerCard />
    </div>
        <div>
        {children} 
        </div>
        </>
    )
}