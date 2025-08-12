import MessageSidebar from "@/Components/Contractor/MessageSidebar";



export default function Layout({ children }) {



    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-3">
                <MessageSidebar />
            </div>
            <div className="flex flex-1 col-span-9">
                {children}
            </div>
        </div>
    );
}