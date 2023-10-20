import Form from "@/components/Form";
import Intro from "@/components/Intro";
import Promo from "@/components/Promo";
import AvailableStates from "@/components/AvailableStates";
import Subscribtion from "@/components/Subscribtion";

export default function Home() {
  return (
    <div>
      <Promo/>
      <Intro/>
      <Form/>
      <AvailableStates/>
      <Subscribtion/>
    </div>
  )
}
