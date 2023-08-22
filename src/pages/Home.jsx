import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen  flex flex-row">
        <div className="w-[50%] h-[100%] flex items-center justify-center">
          <img
            className=""
            src="https://th.bing.com/th?id=OIP.3yg4Tt2HSpeij2buVbOUmgHaFy&w=282&h=220&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          />
        </div>
        <div className="w-[50%] h-[100%] flex items-center ">
          <span className="mt-10 text-2xl">
            WhatsApp (also called WhatsApp Messenger) is a freeware,
            cross-platform, centralized instant messaging (IM) and voice-over-IP
            (VoIP) service owned by United States tech conglomerate Meta
            Platforms. It allows users to send text, voice messages and video
            messages, make voice and video calls, and share images, documents,
            user locations, and other content.
          </span>
        </div>
      </div>
    </>
  );
}
