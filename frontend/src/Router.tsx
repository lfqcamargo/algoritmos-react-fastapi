import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Factorial } from "./pages/Factorial";
import { BinarySearchOrdened } from "./pages/BinarySearchOrdened";
import { MergeSort } from "./pages/MergeSort";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/factorial" element={<Factorial />} /> 
            <Route path="/binary-search-ordened" element={<BinarySearchOrdened />} /> 
            <Route path="/merge-sort" element={<MergeSort />} /> 
        </Routes>
    )
}