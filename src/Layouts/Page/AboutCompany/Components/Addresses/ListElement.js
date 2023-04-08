import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    outline: none;
    border-radius: 0px;
    color: #0F172A;
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row justify-content-between align-items-center align-self-stretch'>
            <div className='d-flex flex-row align-items-center align-self-stretch gap-2 py-3'>
                <Option>{props.children}</Option>
            </div>
            <div className='d-flex flex-row align-items-center align-self-stretch gap-2 py-2'>
                <IconOnlyButton icon={<EditIcon/>}/>
                <IconOnlyButton icon={<RemoveIcon/>}/>
            </div>
        </div>
    );
}

export default ListElement;