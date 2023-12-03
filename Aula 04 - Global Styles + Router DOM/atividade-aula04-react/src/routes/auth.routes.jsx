import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Destinos } from '../pages/Destinos/Destinos'
import { Contato } from '../pages/Contato/Contato'

export function AuthRoutes() {
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/destinos" element={<Destinos />} />
<Route path="/contato" element={<Contato />} />
</Routes>
)
}