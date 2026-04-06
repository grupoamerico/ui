import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import {
  House,
  ShoppingCart,
  Users,
  CogSixTooth,
  ChartBar,
  InboxSolid,
} from "@grupoamerico/icons"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
} from "./sidebar"

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

type Story = StoryObj<typeof Sidebar>

const menuItems = [
  { icon: House, label: "Inicio" },
  { icon: ShoppingCart, label: "Pedidos" },
  { icon: Users, label: "Clientes" },
  { icon: ChartBar, label: "Reportes" },
  { icon: InboxSolid, label: "Mensajes" },
  { icon: CogSixTooth, label: "Configuración" },
]

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <div className="flex h-[500px] w-full">
        <Sidebar>
          <SidebarHeader className="p-4">
            <span className="text-lg font-bold">Mi App</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navegación</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton>
                        <item.icon />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="p-4">
            <span className="text-xs text-muted-foreground">v1.0.0</span>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 p-6">
          <p className="text-sm text-muted-foreground">Contenido principal</p>
        </main>
      </div>
    </SidebarProvider>
  ),
}

export const RightSide: Story = {
  render: () => (
    <SidebarProvider>
      <div className="flex h-[500px] w-full">
        <main className="flex-1 p-6">
          <p className="text-sm text-muted-foreground">Contenido principal</p>
        </main>
        <Sidebar side="right">
          <SidebarHeader className="p-4">
            <span className="text-lg font-bold">Panel</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Detalles</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.slice(0, 3).map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton>
                        <item.icon />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>
    </SidebarProvider>
  ),
}

export const MultipleGroups: Story = {
  render: () => (
    <SidebarProvider>
      <div className="flex h-[500px] w-full">
        <Sidebar>
          <SidebarHeader className="p-4">
            <span className="text-lg font-bold">CRM</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Principal</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.slice(0, 3).map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton>
                        <item.icon />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarGroupLabel>Herramientas</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.slice(3).map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton>
                        <item.icon />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-6">
          <p className="text-sm text-muted-foreground">Contenido principal</p>
        </main>
      </div>
    </SidebarProvider>
  ),
}

export const OutlineButtons: Story = {
  render: () => (
    <SidebarProvider>
      <div className="flex h-[500px] w-full">
        <Sidebar>
          <SidebarHeader className="p-4">
            <span className="text-lg font-bold">Mi App</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navegación</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton variant="outline">
                        <item.icon />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-6">
          <p className="text-sm text-muted-foreground">Contenido principal</p>
        </main>
      </div>
    </SidebarProvider>
  ),
}
