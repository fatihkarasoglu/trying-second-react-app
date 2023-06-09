import Header from "./components/header"

export default function RegisterModal({ data, close }) {
    return(
        <div className="w-[]700px">
            <Header title="Kayıt Ol" />
            <div className="p-4">
                {data.name} {data.surname}
                <button onClick={() => {
                    data.setSearch('yeni arama kelimesi')
                    close()
                }}>Aramayı Yenile</button>
            </div>
        </div>
    )
}