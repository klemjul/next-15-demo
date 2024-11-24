interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = async ({ children }) => {
  return (
    <div className="container mx-auto px-28 pt-10">
      <div>{children}</div>
    </div>
  );
};

export default Layout;
