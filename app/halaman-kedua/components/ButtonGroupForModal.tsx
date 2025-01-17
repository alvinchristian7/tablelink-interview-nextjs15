import { useModal } from '@/store/modal';
import React from 'react'

const ButtonGroupForModal = () => {
  const { openWithDetails } = useModal();

  const openModal1 = () => {
    openWithDetails({
      description: "Are you sure you want to select this song?",
    });
  };
  const openModal2 = () => {
    openWithDetails({
      description: "Are you sure you want to approve this song?",
      imageURL: "https://picsum.photos/200/300",
    });
  };
  const openModal3 = () => {
    openWithDetails({
      iconColor: "red",
      description: "Are you sure you want to reject this song?",
      imageURL: "https://picsum.photos/200/300",
    });
  };

  return (
    <div className='flex gap-4'>
      <button className='px-4 py-2 bg-red-500 rounded-md text-white' onClick={openModal1}>Modal 1</button>
      <button className='px-4 py-2 bg-red-500 rounded-md text-white' onClick={openModal2}>Modal 2</button>
      <button className='px-4 py-2 bg-red-500 rounded-md text-white' onClick={openModal3}>Modal 3</button>
    </div>
  )
}

export default ButtonGroupForModal