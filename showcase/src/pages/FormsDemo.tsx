import { useState } from "react"
import {
  Input,
  Select,
  Checkbox,
  Switch,
  RadioGroup,
  Textarea,
  DatePicker,
  CurrencyInput,
  Label,
  Hint,
} from "@americojs/ui"
import { PageHeader, DemoSection, DemoGrid, DemoItem } from "../components/DemoSection"

export function FormsDemo() {
  const [inputValue, setInputValue] = useState("")
  const [selectValue, setSelectValue] = useState("")
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [switchChecked, setSwitchChecked] = useState(false)
  const [radioValue, setRadioValue] = useState("option1")
  const [textareaValue, setTextareaValue] = useState("")
  const [dateValue, setDateValue] = useState<Date | null>(null)

  return (
    <div>
      <PageHeader
        title="Form Controls"
        description="Componentes para formularios e inputs de datos."
        components={[
          "Input",
          "Select",
          "Checkbox",
          "Switch",
          "RadioGroup",
          "Textarea",
          "DatePicker",
          "CurrencyInput",
          "Label",
          "Hint",
        ]}
      />

      {/* Input */}
      <DemoSection
        title="Input"
        description="Campo de entrada de texto con diferentes variantes."
      >
        <div className="space-y-4 max-w-md">
          <div>
            <Label htmlFor="input-default">Input Default</Label>
            <Input
              id="input-default"
              placeholder="Escribe algo..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="input-disabled">Input Disabled</Label>
            <Input id="input-disabled" placeholder="No puedes escribir aqui" disabled />
          </div>
          <div>
            <Label htmlFor="input-error">Input con Error</Label>
            <Input id="input-error" placeholder="Valor invalido" aria-invalid="true" />
            <Hint variant="error">Este campo es requerido</Hint>
          </div>
          <div>
            <Label htmlFor="input-password">Password</Label>
            <Input id="input-password" type="password" placeholder="Tu contrasena" />
          </div>
        </div>
      </DemoSection>

      {/* Input Sizes */}
      <DemoSection title="Input - Tamanos" description="Los inputs vienen en diferentes tamanos.">
        <DemoGrid columns={3}>
          <DemoItem label="Small">
            <Input size="small" placeholder="Small" />
          </DemoItem>
          <DemoItem label="Base">
            <Input size="base" placeholder="Base" />
          </DemoItem>
          <DemoItem label="Large (no disponible)">
            <Input placeholder="Default size" />
          </DemoItem>
        </DemoGrid>
      </DemoSection>

      {/* Select */}
      <DemoSection title="Select" description="Menu desplegable para seleccionar opciones.">
        <div className="space-y-4 max-w-md">
          <div>
            <Label>Select Default</Label>
            <Select value={selectValue} onValueChange={setSelectValue}>
              <Select.Trigger>
                <Select.Value placeholder="Selecciona una opcion" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="option1">Opcion 1</Select.Item>
                <Select.Item value="option2">Opcion 2</Select.Item>
                <Select.Item value="option3">Opcion 3</Select.Item>
              </Select.Content>
            </Select>
          </div>
          <div>
            <Label>Select con Grupos</Label>
            <Select>
              <Select.Trigger>
                <Select.Value placeholder="Selecciona un item" />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Label>Frutas</Select.Label>
                  <Select.Item value="apple">Manzana</Select.Item>
                  <Select.Item value="banana">Banana</Select.Item>
                </Select.Group>
                <Select.Separator />
                <Select.Group>
                  <Select.Label>Verduras</Select.Label>
                  <Select.Item value="carrot">Zanahoria</Select.Item>
                  <Select.Item value="lettuce">Lechuga</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select>
          </div>
          <div>
            <Label>Select Disabled</Label>
            <Select disabled>
              <Select.Trigger>
                <Select.Value placeholder="No disponible" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="x">X</Select.Item>
              </Select.Content>
            </Select>
          </div>
        </div>
      </DemoSection>

      {/* Checkbox */}
      <DemoSection title="Checkbox" description="Casillas de verificacion para opciones binarias.">
        <DemoGrid columns={3}>
          <DemoItem label="Default">
            <div className="flex items-center gap-2">
              <Checkbox
                id="check-default"
                checked={checkboxChecked}
                onCheckedChange={(checked) => setCheckboxChecked(!!checked)}
              />
              <Label htmlFor="check-default">Acepto los terminos</Label>
            </div>
          </DemoItem>
          <DemoItem label="Checked">
            <div className="flex items-center gap-2">
              <Checkbox id="check-checked" checked={true} />
              <Label htmlFor="check-checked">Seleccionado</Label>
            </div>
          </DemoItem>
          <DemoItem label="Disabled">
            <div className="flex items-center gap-2">
              <Checkbox id="check-disabled" disabled />
              <Label htmlFor="check-disabled" className="text-ui-fg-disabled">
                Deshabilitado
              </Label>
            </div>
          </DemoItem>
        </DemoGrid>
      </DemoSection>

      {/* Switch */}
      <DemoSection title="Switch" description="Interruptores para activar/desactivar opciones.">
        <DemoGrid columns={3}>
          <DemoItem label="Default">
            <div className="flex items-center gap-2">
              <Switch
                id="switch-default"
                checked={switchChecked}
                onCheckedChange={setSwitchChecked}
              />
              <Label htmlFor="switch-default">
                {switchChecked ? "Activo" : "Inactivo"}
              </Label>
            </div>
          </DemoItem>
          <DemoItem label="Small">
            <div className="flex items-center gap-2">
              <Switch id="switch-small" size="small" />
              <Label htmlFor="switch-small">Pequeno</Label>
            </div>
          </DemoItem>
          <DemoItem label="Disabled">
            <div className="flex items-center gap-2">
              <Switch id="switch-disabled" disabled />
              <Label htmlFor="switch-disabled" className="text-ui-fg-disabled">
                Deshabilitado
              </Label>
            </div>
          </DemoItem>
        </DemoGrid>
      </DemoSection>

      {/* RadioGroup */}
      <DemoSection title="RadioGroup" description="Grupo de opciones mutuamente excluyentes.">
        <div className="max-w-md">
          <Label className="mb-2 block">Selecciona un plan</Label>
          <RadioGroup value={radioValue} onValueChange={setRadioValue}>
            <div className="flex items-center gap-2">
              <RadioGroup.Item value="option1" id="radio-1" />
              <Label htmlFor="radio-1">Plan Basico - $9/mes</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroup.Item value="option2" id="radio-2" />
              <Label htmlFor="radio-2">Plan Pro - $19/mes</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroup.Item value="option3" id="radio-3" />
              <Label htmlFor="radio-3">Plan Enterprise - $49/mes</Label>
            </div>
          </RadioGroup>
          <Hint className="mt-2">Seleccionaste: {radioValue}</Hint>
        </div>
      </DemoSection>

      {/* Textarea */}
      <DemoSection title="Textarea" description="Area de texto para entradas multilinea.">
        <div className="space-y-4 max-w-md">
          <div>
            <Label htmlFor="textarea-default">Descripcion</Label>
            <Textarea
              id="textarea-default"
              placeholder="Escribe una descripcion..."
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
            />
            <Hint>{textareaValue.length}/500 caracteres</Hint>
          </div>
          <div>
            <Label htmlFor="textarea-disabled">Textarea Disabled</Label>
            <Textarea id="textarea-disabled" placeholder="No disponible" disabled />
          </div>
        </div>
      </DemoSection>

      {/* DatePicker */}
      <DemoSection title="DatePicker" description="Selector de fechas con calendario.">
        <div className="space-y-4 max-w-md">
          <div>
            <Label>Selecciona una fecha</Label>
            <DatePicker
              value={dateValue}
              onChange={setDateValue}
            />
            {dateValue && (
              <Hint>Fecha seleccionada: {dateValue.toLocaleDateString()}</Hint>
            )}
          </div>
        </div>
      </DemoSection>

      {/* CurrencyInput */}
      <DemoSection title="CurrencyInput" description="Input especializado para valores monetarios.">
        <div className="space-y-4 max-w-md">
          <div>
            <Label htmlFor="currency-usd">Precio (USD)</Label>
            <CurrencyInput
              id="currency-usd"
              code="USD"
              symbol="$"
              placeholder="0.00"
            />
          </div>
          <div>
            <Label htmlFor="currency-eur">Precio (EUR)</Label>
            <CurrencyInput
              id="currency-eur"
              code="EUR"
              symbol="€"
              placeholder="0,00"
            />
          </div>
        </div>
      </DemoSection>

      {/* Complete Form Example */}
      <DemoSection title="Formulario Completo" description="Ejemplo de formulario con multiples campos.">
        <form className="space-y-4 max-w-lg" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="form-name">Nombre</Label>
              <Input id="form-name" placeholder="Juan" />
            </div>
            <div>
              <Label htmlFor="form-lastname">Apellido</Label>
              <Input id="form-lastname" placeholder="Perez" />
            </div>
          </div>
          <div>
            <Label htmlFor="form-email">Email</Label>
            <Input id="form-email" type="email" placeholder="juan@ejemplo.com" />
          </div>
          <div>
            <Label>Pais</Label>
            <Select>
              <Select.Trigger>
                <Select.Value placeholder="Selecciona tu pais" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="ar">Argentina</Select.Item>
                <Select.Item value="mx">Mexico</Select.Item>
                <Select.Item value="es">Espana</Select.Item>
                <Select.Item value="co">Colombia</Select.Item>
              </Select.Content>
            </Select>
          </div>
          <div>
            <Label htmlFor="form-bio">Biografia</Label>
            <Textarea id="form-bio" placeholder="Cuentanos sobre ti..." />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="form-terms" />
            <Label htmlFor="form-terms">Acepto los terminos y condiciones</Label>
          </div>
        </form>
      </DemoSection>
    </div>
  )
}
