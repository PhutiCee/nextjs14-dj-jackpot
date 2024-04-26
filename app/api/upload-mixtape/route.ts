import { UploadAudio } from "@/lib/audio-upload";
import { UploadImage } from "@/lib/image-upload";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const formData = await req.formData();

    const image = formData.get("image") as unknown as File;
    const audio = formData.get("audio") as unknown as File;

    const dataImage: any = await UploadImage(image, "MixtapeImage");
    const dataAudio: any = await UploadAudio(audio, "Mixtape");

    // // MongoDb or Database
    // //Image Url
    // console.log(dataImage?.secure_url)
    // //Image ID
    // console.log(dataImage?.public_id)

    // //Audio Url
    // console.log(dataAudio?.secure_url)
    // //Audio ID
    // console.log(dataAudio?.public_id)

    return NextResponse.json({ audioLink: dataAudio?.secure_url, imageLink: dataImage?.secure_url }, { status: 200 });
}