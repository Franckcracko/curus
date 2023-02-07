
const ListLink = ({path,children}) =>{
  return(
    <li className="ml-4 font-medium"><a href={path}>{children}</a></li>
  )
}
export default ListLink;