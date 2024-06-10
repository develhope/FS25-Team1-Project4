import { Sidebar } from 'flowbite-react';
import { HiBriefcase, HiInbox, HiUserGroup, } from 'react-icons/hi';
import { useState } from 'react';
import EditForm from '../components/EditForm';
import UserTable from './UserTable';


export function SidebarEdit() {
    // Stato per gestire il componente attivo
    const [activeComponent, setActiveComponent] = useState('editForm');

    // Funzione per cambiare il componente attivo
    const handleItemClick = (component) => {
        setActiveComponent(component);
    };
    return (
        <>
            <Sidebar aria-label="Default sidebar example" className="fixed left-12 top-[5.5rem] translate-y-[4rem] h-[11rem] mt-10">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" icon={HiBriefcase} onClick={() => handleItemClick('editForm')}>
                            Gestione Contenuti
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiUserGroup} onClick={() => handleItemClick('gestioneUtenti')}>
                            Gestione Utenti
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiInbox} onClick={() => handleItemClick('placeholder')}>
                            Placeholder
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
            <div className="ml-72 p-4">
                {activeComponent === 'editForm' && <EditForm />}
                {activeComponent === 'gestioneUtenti' && <UserTable />}
                {activeComponent === 'placeholder' && <div>Placeholder</div>}
            </div>
        </>
    );
}
