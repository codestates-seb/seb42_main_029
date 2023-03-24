import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function BasicButtonExample() {
  
  return (
    <DropdownButton id="dropdown-basic-button" title="선택하세요">
      <Dropdown.Item href="#/action-1">베이지</Dropdown.Item>
      <Dropdown.Item href="#/action-2">블랙</Dropdown.Item>
      <Dropdown.Item href="#/action-3">화이트</Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButtonExample;