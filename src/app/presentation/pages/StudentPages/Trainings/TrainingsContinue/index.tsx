import React from 'react';
import SearchSave from "../components/SearchSave";
import TrainingsContinuePage from './TrainingsContinuePage';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import LeftProfile from '../components/LeftProfile';
import LeftNav from '../components/LeftNav';
import LinkMenu from '../components/LinkMenu';
import TrainingsList from '../components/TrainingsList';

const FakePropositions = [
    <TrainingsContinuePage key={"1"} image={"https://demo.anibalbilisim.com/digithane/egitim/unity.png"}
        title={"Unity Oyun Geliştirmeyi Oyun Geliştirerek Öğren"} percentage={80} />,
    <TrainingsContinuePage key={"2"} image={"https://demo.anibalbilisim.com/digithane/egitim/etik.png"}
    title={"Etik Hackerlik ve Siber Güvenlik"} percentage={40} />,
    <TrainingsContinuePage key={"3"} image={"https://demo.anibalbilisim.com/digithane/egitim/girisim.png"}
    title={"Girişimcilik - İş Geliştirme ve Dijital Pazarlama Eğitimi"} percentage={70} />,
    <TrainingsContinuePage key={"4"} image={"https://demo.anibalbilisim.com/digithane/egitim/mobil.png"}
    title={"Mobil Oyun Yapımı Eğitimi - Android"} percentage={90} />,
    <TrainingsContinuePage key={"5"} image={"https://demo.anibalbilisim.com/digithane/egitim/kosgeb.png"}
    title={"KOSGEB İçin İş Planı Hazırlama"} percentage={30} />,
   
]

const Index = () => {

    const [searchTerm, setSearchTerm] = React.useState("");
    const [currentPage, setCurrentPage] = React.useState(1);
    const recordsPerPage = 4;

    const filteredPropositions = FakePropositions.filter((proposition) => 
        proposition.props.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = filteredPropositions.slice(indexOfFirstRecord, indexOfLastRecord);

    return (
    <div className={"w-full h-max"}>
        <LinkMenu/>
        <div className={"flex flex-col md:flex-row gap-8 p-4 md:p-10"}>
            <div className={"w-full md:w-1/4 h-full rounded-lg"}>
                <LeftProfile/>
                <LeftNav/>
            </div>
            <div className={"w-full md:w-3/4 h-full rounded-lg mb-4 md:mb-0"}>
                <SearchSave recordCount={filteredPropositions.length} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
                <TrainingsList TrainingsPage={currentRecords} moreButtonOnClick={console.log} />
                <Stack spacing={2} className='flex items-center mt-5'>
                    <Pagination 
                        size='large' 
                        count={Math.ceil(filteredPropositions.length / recordsPerPage)} 
                        page={currentPage}
                        onChange={(event, page) => setCurrentPage(page)}
                        sx={{
                            '.MuiPaginationItem-page.Mui-selected': {
                                backgroundColor: '#222D68',
                                color: '#fff',
                            },
                            '.MuiPaginationItem-page.Mui-selected:hover': {
                                backgroundColor: '#222D68',
                            },
                            '.MuiPaginationItem-page': {
                                color: '#222D68',
                            },
                        }}
                    />
                </Stack>
            </div>
        </div>
    </div>
    );
};

export default Index;