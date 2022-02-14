import NavBar from '../../components/navbar/navbar'

export default function Logout() {
  return (
    <body>
      <NavBar />

      <h1 className="autorisation-denied">
        Vous vous êtes déconnecté avec succès
      </h1>
    </body>
  )
}
