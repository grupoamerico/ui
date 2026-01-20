import {
  Table,
  Badge,
  StatusBadge,
  IconBadge,
  Avatar,
  Calendar,
} from "@americojs/ui"
import { PageHeader, DemoSection, DemoGrid, DemoItem } from "../components/DemoSection"

const sampleData = [
  { id: 1, name: "Juan Perez", email: "juan@ejemplo.com", role: "Admin", status: "active" },
  { id: 2, name: "Maria Garcia", email: "maria@ejemplo.com", role: "Editor", status: "active" },
  { id: 3, name: "Carlos Lopez", email: "carlos@ejemplo.com", role: "Viewer", status: "inactive" },
  { id: 4, name: "Ana Martinez", email: "ana@ejemplo.com", role: "Editor", status: "pending" },
]

export function DataDisplayDemo() {
  return (
    <div>
      <PageHeader
        title="Data Display"
        description="Componentes para mostrar datos y informacion."
        components={["Table", "DataTable", "Badge", "StatusBadge", "IconBadge", "Avatar", "Calendar"]}
      />

      {/* Table */}
      <DemoSection
        title="Table"
        description="Tabla basica para mostrar datos tabulares."
      >
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nombre</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Rol</Table.HeaderCell>
              <Table.HeaderCell>Estado</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sampleData.map((user) => (
              <Table.Row key={user.id}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>
                  <Badge color={user.role === "Admin" ? "red" : user.role === "Editor" ? "blue" : "grey"}>
                    {user.role}
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <StatusBadge
                    color={
                      user.status === "active" ? "green" :
                      user.status === "inactive" ? "red" : "orange"
                    }
                  >
                    {user.status}
                  </StatusBadge>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </DemoSection>

      {/* Badge */}
      <DemoSection
        title="Badge"
        description="Insignias para etiquetar y categorizar elementos."
      >
        <DemoGrid columns={4}>
          <DemoItem label="Grey">
            <Badge color="grey">Default</Badge>
          </DemoItem>
          <DemoItem label="Blue">
            <Badge color="blue">Info</Badge>
          </DemoItem>
          <DemoItem label="Green">
            <Badge color="green">Success</Badge>
          </DemoItem>
          <DemoItem label="Red">
            <Badge color="red">Error</Badge>
          </DemoItem>
          <DemoItem label="Orange">
            <Badge color="orange">Warning</Badge>
          </DemoItem>
          <DemoItem label="Purple">
            <Badge color="purple">New</Badge>
          </DemoItem>
          <DemoItem label="Rounded">
            <Badge color="blue" rounded>PRO</Badge>
          </DemoItem>
          <DemoItem label="Small">
            <Badge color="green" size="small">Small</Badge>
          </DemoItem>
        </DemoGrid>
      </DemoSection>

      {/* StatusBadge */}
      <DemoSection
        title="StatusBadge"
        description="Badges especializados para mostrar estados."
      >
        <DemoGrid columns={4}>
          <DemoItem label="Green">
            <StatusBadge color="green">Active</StatusBadge>
          </DemoItem>
          <DemoItem label="Red">
            <StatusBadge color="red">Inactive</StatusBadge>
          </DemoItem>
          <DemoItem label="Orange">
            <StatusBadge color="orange">Pending</StatusBadge>
          </DemoItem>
          <DemoItem label="Blue">
            <StatusBadge color="blue">Processing</StatusBadge>
          </DemoItem>
          <DemoItem label="Grey">
            <StatusBadge color="grey">Draft</StatusBadge>
          </DemoItem>
          <DemoItem label="Purple">
            <StatusBadge color="purple">Scheduled</StatusBadge>
          </DemoItem>
        </DemoGrid>
      </DemoSection>

      {/* IconBadge */}
      <DemoSection
        title="IconBadge"
        description="Badges que contienen un icono."
      >
        <DemoGrid columns={4}>
          <DemoItem label="Default">
            <IconBadge>
              <span>★</span>
            </IconBadge>
          </DemoItem>
          <DemoItem label="Green">
            <IconBadge color="green">
              <span>✓</span>
            </IconBadge>
          </DemoItem>
          <DemoItem label="Red">
            <IconBadge color="red">
              <span>✕</span>
            </IconBadge>
          </DemoItem>
          <DemoItem label="Blue">
            <IconBadge color="blue">
              <span>i</span>
            </IconBadge>
          </DemoItem>
        </DemoGrid>
      </DemoSection>

      {/* Avatar */}
      <DemoSection
        title="Avatar"
        description="Avatares para representar usuarios."
      >
        <DemoGrid columns={4}>
          <DemoItem label="Default">
            <Avatar fallback="JP" />
          </DemoItem>
          <DemoItem label="Con Imagen">
            <Avatar
              src="https://avatars.githubusercontent.com/u/1?v=4"
              fallback="US"
            />
          </DemoItem>
          <DemoItem label="Variantes">
            <div className="flex -space-x-2">
              <Avatar fallback="A" variant="squared" />
              <Avatar fallback="B" variant="squared" />
              <Avatar fallback="C" variant="squared" />
            </div>
          </DemoItem>
          <DemoItem label="Rounded">
            <Avatar fallback="RD" variant="rounded" />
          </DemoItem>
        </DemoGrid>
      </DemoSection>

      {/* Calendar */}
      <DemoSection
        title="Calendar"
        description="Calendario para mostrar y seleccionar fechas."
      >
        <div className="flex justify-center">
          <Calendar />
        </div>
      </DemoSection>

      {/* Data Table Info */}
      <DemoSection
        title="DataTable (Block)"
        description="Tabla de datos avanzada con filtros, ordenamiento, paginacion y mas. Este es un bloque complejo que combina multiples componentes."
      >
        <div className="rounded-lg border border-ui-border-base bg-ui-bg-field p-4">
          <p className="text-ui-fg-muted text-sm mb-4">
            El DataTable es un componente avanzado que incluye:
          </p>
          <ul className="list-disc list-inside text-ui-fg-muted text-sm space-y-1">
            <li>Filtrado por columnas</li>
            <li>Ordenamiento</li>
            <li>Paginacion</li>
            <li>Seleccion multiple</li>
            <li>Acciones por fila</li>
            <li>Barra de comandos</li>
            <li>Drag and drop para reordenar</li>
          </ul>
          <p className="text-ui-fg-subtle text-xs mt-4">
            Ver la documentacion completa en Storybook para ejemplos interactivos.
          </p>
        </div>
      </DemoSection>
    </div>
  )
}
