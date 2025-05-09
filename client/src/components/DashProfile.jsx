import { Alert, Button, TextInput } from "flowbite-react";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const filePickerRef = useRef();
  const [imageUploadProgress, setImageUploadProgress] = useState(0);
  const [imageUploadError, setImageUploadError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImage(file);
    } else {
      setImageUploadError("No file selected.");
    }
  };

  const uploadImage = async (file) => {
    try {
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Progress:", progress);
          setImageUploadProgress(Math.round(progress));
        },
        (error) => {
          console.error(error);
          setImageUploadError("Image upload failed.");
          setImageUploadProgress(0);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageFileUrl(downloadURL);
            setTimeout(() => setImageUploadProgress(0), 500);
          });
        }
      );
    } catch (error) {
      //console.error(error);
      setImageUploadError("Image upload failed.");
      setImageUploadProgress(0);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={filePickerRef}
          hidden
        />
        <div
          className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
          onClick={() => filePickerRef.current.click()}
        >
          <img
            src={imageFileUrl || currentUser.profilePicture}
            alt="user"
            className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
          />

          {imageUploadProgress > 0 && imageUploadProgress < 100 && (
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center rounded-full transition-opacity duration-300">
              <CircularProgressbar
                value={imageUploadProgress}
                text={`${imageUploadProgress}%`}
                strokeWidth={5}
                styles={{
                  path: {
                    stroke: `rgba(62,152,199, ${imageUploadProgress / 100})`,
                  },
                  text: {
                    fill: "#fff",
                    fontSize: "18px",
                  },
                }}
              />
            </div>
          )}
        </div>

        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}

        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.userName}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
        />
        <TextInput type="password" id="password" placeholder="password" />

        <Button type="submit" gradientDuoTone="purpleToBlue" outline>
          Update
        </Button>
      </form>

      {/*{imageUploadProgress > 0 && (
        <p className="text-center text-sm text-blue-500">
          Uploading: {imageUploadProgress}%
        </p>
      )}
      {imageUploadError && (
        <p className="text-center text-sm text-red-500">{imageUploadError}</p>
      )}*/}

      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
