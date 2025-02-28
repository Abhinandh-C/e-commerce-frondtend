import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDrop = () => {
  const [isOpenModel, setisOpenModel] = useState(false);

  const [state, setState] = useState([
    { id: 1, name: "Alappuzha" },
    { id: 2, name: "Ernakulam" },
    { id: 3, name: "Idukki" },
    { id: 4, name: "Kannur" },
    { id: 5, name: "Kasaragod" },
    { id: 6, name: "Kollam" },
    { id: 7, name: "Kottayam" },
    { id: 8, name: "Kozhikode" },
    { id: 9, name: "Malappuram" },
    { id: 10, name: "Palakkad" },
    { id: 12, name: "Pathanamthitta" },
    { id: 13, name: "Thiruvananthapuram" },
    { id: 14, name: "Thrissur" },
    { id: 15, name: "Wayanad" },
  ]);

  const [search, setSearch] = useState("");
  const handileSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = state.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const [selectedLocation, setSelectedLocation] = useState("");
  const handileSelectedLocation = (location) => {
    setSelectedLocation(location);
    setisOpenModel(false);
  };

  return (
    <div>
      <Button className="countryDrop" onClick={() => setisOpenModel(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">
            {selectedLocation ? selectedLocation : "Select Location"}
          </span>
        </div>
        <div className="ms-4">
          <span className="ml-auto">
            <FaAngleDown />
          </span>
        </div>
      </Button>

      <Dialog
        open={isOpenModel}
        onClose={() => setisOpenModel(false)}
        className="locationModel"
        TransitionComponent={Transition}
      >
        <h4 className="mb-2">Choose Your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="close_" onClick={() => setisOpenModel(false)}>
          <IoMdClose />
        </Button>
        <div className="headerSearch w-100">
          <input
            type="text"
            placeholder="Search your area"
            value={search}
            onChange={handileSearch}
          />
          <Button>
            <IoSearchOutline />
          </Button>
        </div>
        <ul className="locationList mt-2">
          {filteredData.map((item) => (
            <li key={item.id}>
              <Button onClick={() => handileSelectedLocation(item.name)}>
                {item.name}
              </Button>
            </li>
          ))}
        </ul>
      </Dialog>
    </div>
  );
};

export default CountryDrop;
