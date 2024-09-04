const CategoriesButtons = ({ item, current, handleButtonClick }) => {
    return <>
        <button onClick={() => handleButtonClick(item)} className={`m-[12px] p-[0px_12px] rounded-lg bg-[#0000000D] ${current === item && 'categoryBackground'}`}>{item}</button>
    </>

}
export default CategoriesButtons