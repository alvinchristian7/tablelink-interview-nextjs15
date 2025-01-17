"use client";

import { useModal } from "@/store/modal";
import Image from "next/image";
import React from "react";

const ModalGlobal = () => {
  const { opened, iconColor, label, description, imageURL, reversedButton } =
    useModal();

  const buttons = [
    {
      className: "bg-white hover:bg-gray-100 text-gray-900",
      label: "Cancel",
      onClick: () => {
        useModal.setState({ opened: false });
      },
    },
    {
      className: "bg-blue-600 hover:bg-blue-500 text-white",
      label: "Yes, Sure",
      onClick: () => {
        useModal.setState({ opened: false });
      },
    },
  ];

  return (
    opened && (
      <div className="relative z-10">
        <div className="fixed inset-0 bg-gray-500/75 transition-opacity" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke={iconColor}
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                        />
                      </svg>
                      <h3 className="text-base font-semibold leading-6 text-gray-900">
                        {label}
                      </h3>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{description}</p>
                    </div>
                    {imageURL && (
                      <div className="mt-2 flex items-center gap-2">
                        <Image
                          src={imageURL}
                          alt="image"
                          width={100}
                          height={100}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 flex items-center">
                {buttons.map((buttonProps) => (
                  <button
                    key={buttonProps.label}
                    type="button"
                    className={
                      buttonProps.className +
                      " inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto"
                    }
                    onClick={buttonProps.onClick}
                  >
                    {buttonProps.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ModalGlobal;
