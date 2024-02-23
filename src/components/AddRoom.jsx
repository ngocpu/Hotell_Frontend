import React, { useState } from 'react'
import { addRoom } from '../apis/fetchApis'
import { RoomTypeSelector } from '../common/RoomTypeSelector'
import { Link } from 'react-router-dom'
export const AddRoom = () => {
    const [newRoom, setNewRoom] = useState({
		photo: null,
		roomType: "",
		roomPrice: ""
	})

	const [successMessage, setSuccessMessage] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const [imagePreview, setImagePreview] = useState("")

	const handleRoomInputChange = (e) => {
		const name = e.target.name
		let value = e.target.value
		if (name === "roomPrice") {
			if (!isNaN(value)) {
				value = parseInt(value)
			} else {
				value = ""
			}
		}
		setNewRoom({ ...newRoom, [name]: value })
	}

	const handleImageChange = (e) => {
		const selectedImage = e.target.files[0]
		setNewRoom({ ...newRoom, photo: selectedImage })
		setImagePreview(URL.createObjectURL(selectedImage))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const success = await addRoom(newRoom.photo, newRoom.roomType, newRoom.roomPrice)
			if (success !== undefined) {
				setSuccessMessage("A new room was  added successfully !")
				setNewRoom({ photo: null, roomType: "", roomPrice: "" })
				setImagePreview("")
				setErrorMessage("")
			} else {
				setErrorMessage("Error adding new room")
			}
		} catch (error) {
			setErrorMessage(error.message)
		}
		setTimeout(() => {
			setSuccessMessage("")
			setErrorMessage("")
		}, 3000)
	}
  return (
    <div className='flex mx-auto mt-20 justify-center items-center flex-col gap-5'>
        <h2 className='text-2xl text-neutral-800 dark:text-white'>Add new room</h2>
        {successMessage && (
							<div className="text-2xl text-green-400"> {successMessage}</div>
						)}

						{errorMessage && <div className="text-2xl text-red-400"> {errorMessage}</div>}
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center '>
							<div className="flex gap-2 ">
								<label htmlFor="roomType" className="">
									Room Type
								</label>
								<div>
									<RoomTypeSelector
										handleRoomInputChange={handleRoomInputChange}
										newRoom={newRoom}
									/>
								</div>
							</div>
							<div className="flex gap-2 ">
								<label htmlFor="roomPrice" className="">
									Room Price
								</label>
								<input
									required
									type="number"
									className=""
									id="roomPrice"
									name="roomPrice"
									value={newRoom.roomPrice}
									onChange={handleRoomInputChange}
								/>
							</div>

							<div className="flex gap-2 ">
								<label htmlFor="photo" className="">
									Room Photo
								</label>
								<input
									required
									name="photo"
									id="photo"
									type="file"
									className=""
									onChange={handleImageChange}
								/>
								{imagePreview && (
									<img
										src={imagePreview}
										alt="Preview  room photo"
										style={{ maxWidth: "400px", maxHeight: "400px" }}
										className="mb-3"></img>
								)}
							</div>
							<div className=" flex gap-2 ">
								<Link to={"/existing-rooms"} className=" px-4 py-2 border border-neutral-400 rounded-md">
									Existing rooms
								</Link>
								<button type="submit" className="px-4 py-2 border border-neutral-400 rounded-md">
									Save Room
								</button>
							</div>
						</form>
    </div>
  )
}
