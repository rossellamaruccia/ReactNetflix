import { Component } from "react"
import { Form, Button, Container } from "react-bootstrap"

class SettingsForm extends Component {
  state = {
    form: {
      name: "",
      language: "",
      maturitySettings: false,
    },
  }

  render() {
    return (
      <>
        <Container fluid className="bg-dark justify-content-center">
          <Form className="w-50">
            <Form.Group>
              <Form.Label>Il tuo nome</Form.Label>
              <Form.Control
                type="text"
                value={this.state.form.name}
                onChange={(e) => {
                  this.setState({
                    form: {
                      ...this.state.form,
                      name: e.target.value,
                    },
                  })
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Lingua:</Form.Label>
              <Form.Select>
                <option
                  value={this.state.form.language}
                  onChange={(e) => {
                    this.setState({
                      form: {
                        ...this.state.form,
                        language: e.target.value,
                      },
                    })
                  }}
                >
                  Italiano
                </option>
                <option
                  value={this.state.form.language}
                  onChange={(e) => {
                    this.setState({
                      form: {
                        ...this.state.form,
                        language: e.target.value,
                      },
                    })
                  }}
                >
                  English
                </option>
                <option
                  value={this.state.form.language}
                  onChange={(e) => {
                    this.setState({
                      form: {
                        ...this.state.form,
                        language: e.target.value,
                      },
                    })
                  }}
                >
                  Espanol
                </option>
                <option
                  value={this.state.form.language}
                  onChange={(e) => {
                    this.setState({
                      form: {
                        ...this.state.form,
                        language: e.target.value,
                      },
                    })
                  }}
                >
                  Francais
                </option>
              </Form.Select>
            </Form.Group>
            <Button variant="secondary">Submit</Button>
          </Form>
        </Container>
      </>
    )
  }
}

export default SettingsForm
