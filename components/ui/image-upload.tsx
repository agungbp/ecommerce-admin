"use client"

import { useEffect, useState } from "react"
import { Button } from "./button"
import { ImagePlus, Trash } from "lucide-react"
import Image from "next/image"
import { CldUploadWidget } from "next-cloudinary"

interface ImageUploadProps {
    disabled?: boolean
    onChange: (value: string) => void
    onRemove: (value: string) => void
    value: string[]
}

const ImageUpload: React.FC<ImageUploadProps> = ({ disabled, onChange, onRemove, value }) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])


    const onUpload = (result: any) => {
        onChange(result.info.secure_url)
    }

    if (!isMounted) {
        return null
    }

    return (
        <>
            <div className="mb-4 flex items-center gap-4">
                {value.map((url) => (
                    <div key={url} className="relative 2-[200px] rounded-md overflow-hidden">
                        <div className="z-10 absolute top-2 right-2">
                            <Button type="button" onClick={() => onRemove(url)} variant="default" size="icon">
                                <Trash className="w-4 h-4" />
                            </Button>
                        </div>
                        <Image
                            fill
                            className="object-cover"
                            src={url}
                            alt="Image"
                        />
                    </div>
                ))}
            </div>
            <CldUploadWidget onUpload={onUpload} uploadPreset="ffp0iul1">
                {({ open }) => {
                    const onClick = () => {
                        open()
                    }

                    return (
                        <Button
                            type="button"
                            disabled={disabled}
                            onClick={onClick}
                            variant="secondary"
                        >
                            <ImagePlus className="w-4 h-4 mr-2" />
                            Upload an image
                        </Button>
                    )
                }}
            </CldUploadWidget>
        </>
    )
}

export default ImageUpload