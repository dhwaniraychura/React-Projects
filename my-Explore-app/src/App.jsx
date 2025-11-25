import ClassComponentExample from "./components/classComponent_example";
import FormExample from "./components/Form_example";
import JSX from "./components/JSX_example";
import LifecycleExample from "./components/Lifecycle_example";
import ListExample from "./components/List_example";
import PropsExample from "./components/Props_example";
import StateExample from "./components/State_example";
 export default function App(){
  return(
    <>
      <JSX/>
      <hr />
      <PropsExample title="Believe, Begin, Become" message="Every small step you take today brings you closer to the future you dream of. Keep going you're stronger than you think."/>
      <hr />
      <StateExample/>
      <hr />
      <ListExample/>
      <hr />
      <FormExample/>
      <hr />
      <LifecycleExample/>
      <hr />
      <ClassComponentExample/>
    </>
  )
}
