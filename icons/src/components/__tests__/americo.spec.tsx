  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import Americo from "../americo"

  describe("Americo", () => {
    it("should render the icon without errors", async () => {
      render(<Americo data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })