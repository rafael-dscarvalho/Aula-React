import { Routes, Route } from 'react-router-dom'
import { Lista } from '../pages/Lista/Lista'
import { Cadastro} from '../pages/Cadastro/Cadastro'

export function AuthRoutes() {
return (
<Routes>
<Route path="" element={<Cadastro />} />
<Route path="/lista" element={<Lista />} />
</Routes>
)
}