import LinkForm from './components/LinkForm'
import LinkList from './components/LinkList'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Questionnaire Link Sharing</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Upload a Questionnaire Link</h2>
          <LinkForm />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Available Questionnaires</h2>
          <LinkList />
        </div>
      </div>
    </div>
  )
}

