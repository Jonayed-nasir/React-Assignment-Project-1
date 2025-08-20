import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@heroui/react';

function NavBar() {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ['About Us', 'Pricing', 'Customers', 'Solutions'];

  return (
    <Navbar className="bg-transparent border-b border-[#183a40] w-full" onOpenMenuOpenChange={setIsMenuOpen} maxWidth='xl'>
      <NavbarContent>
        <NavbarBrand className="flex md:ml-0">
          <img className="flex " src="/Logo.png" alt="" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-white" href="#">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Solutionss
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className="bg-[#0FF1F6] md:text-[0.9rem] hidden md:flex rounded-2xl"
            size="sm"
          >
            Book a Demo
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            size="sm"
            variant="bordered"
            className="text-white md:text-[0.9rem] hidden md:flex rounded-2xl"
            as={Link}
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-[#02242a]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-white"
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}

        <NavbarItem>
          <Button className="bg-[#0FF1F6] md:text-[0.9rem] rounded-2xl" size="sm" >
            Book a Demo
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            size="sm"
            variant="bordered"
            className="text-white md:text-[0.9rem] rounded-2xl"
            as={Link}
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarMenu>
      <NavbarMenuToggle
        className="sm:hidden text-white "
        aria-label={IsMenuOpen ? 'Close menu' : 'Opent menu'}
      />
    </Navbar>
  );
}

export default NavBar;
