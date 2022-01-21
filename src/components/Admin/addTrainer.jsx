import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTrainers } from "../../redux/features/trainer";

const AddTrainer = () => {

  const dispatch = useDispatch();
  const [addName, setAddName] = useState("");
  const [addRating, setAddRating] = useState("");
  const [addPhoto, setAddPhoto] = useState("");
  const [addInfo, setAddInfo] = useState("")

  return (
    <div>
      <input type="text" /> <br />
      <input type="text" /> <br />
      <input type="text" /> <br />
      <input type="text" /> <br />
      <button>Отправить</button>
    </div>
  );
};

export default AddTrainer;
