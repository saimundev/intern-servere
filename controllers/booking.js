import BookingModel from "../models/booking.js";

export const createBooking = async (req, res) => {
  const { name, email, phone, address, rodeNumber, prodectId, postCode } =
    req.body;
  console.log(req.body)
  try {
    const booking = new BookingModel({
      name,
      email,
      phone,
      address,
      rodeNumber,
      prodectId,
      postCode,
    });

    await booking.save();
    res.status(200).json({ message: "Booking Successfull" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
