import { signOut } from "next-auth/react"

import ButtonUi from "../../components/ui/button/button.ui"

const ProtectedPage = () => {
  const onLogout = () => {
    signOut();
  }
  return <>
    <ButtonUi onClick={onLogout}>Log out</ButtonUi>
  </>
}
export default ProtectedPage;