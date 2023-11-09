import React, {useState} from 'react';
import { Decline, Open } from "@/svgImports";
import Popup from '../../ProjectForm/components/PopUp';
import Preview from '../MyProjects/Preview';
import { BASE_URL } from '@/config';
import EmptyImage from '@/app/presentation/assets/digithane.png'
import Image from 'next/image';

interface Project {
    projectName: string;
    logo: string;
    url?: string;
    subject: string;
}
  
interface ApplicationCardTwoPageProps {
    declineds: Project[];
}

const ApplicationCardTwoPage: React.FC<ApplicationCardTwoPageProps> = ({ declineds }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedDeclined, setSelectedDeclined] = useState<Project | null>(null);
    return (
        <>
            {declineds.map((declined, index) => (
                <div key={index} className="w-full flex shadow-xl md:flex-row flex-col bg-white mb-8 p-5 rounded-xl gap-8">
                    <div className="rounded-lg md:mb-0 md:w-3/6 w-full">
                        {declined.logo ? 
                            <img src={`${BASE_URL}${declined.logo}`} className="w-full h-[185px] rounded-xl" alt={declined.projectName} /> 
                            : 
                            <div className='w-full' style={{position:"relative", height:"185px"}}>
                                <Image src={EmptyImage} alt="Default" layout="fill" className='rounded-xl' />
                            </div>
                        }
                    </div>
                    <div className="flex flex-col justify-between w-full">
                        <div className="w-full mb-5 md:text-3xl text-2xl text-grey">
                            <div>{declined.projectName}</div>
                        </div>
                        <div className="justify-between items-center mb-2 text-slate-500">
                            <p>{declined.subject}</p>
                        </div>
                        {/* You can further modify the below buttons/links according to your future needs */}
                        <div className="mt-5 w-full flex justify-between m-0 items-center">
                            <div>
                                <a href={declined.url} target="_blank" rel="noopener noreferrer" className='bg-danger text-warning flex items-center rounded-full px-4 min-h-[42px] w-full h-full'>
                                    <Decline/> <span className='ml-2 py-2'>REDDEDİLDİ</span>
                                </a>
                            </div>
                            <div>
                                <button onClick={() => {
                                    setSelectedDeclined(declined);
                                    setShowPopup(true);
                                }}>
                                    <Open/>
                                </button>
                                {showPopup && selectedDeclined === declined && (
                                    <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}>
                                        <Preview project={selectedDeclined} onClose={() => setShowPopup(false)} />
                                    </Popup>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ApplicationCardTwoPage;
