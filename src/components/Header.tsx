
type Props = {
  title: string;
  children?: any;
}

function Header({ title, children }: Props) {
  return (
    <div className="pt-16 pb-8 border-b flex flex-row justify-between">
      <h1 className="font-bold text-4xl -tracking-wide text-black">
        {title}
      </h1>

      {children}
    </div>
  )
}

export default Header;