import { QuestionnaireLink } from '../../types/questionnaire'
import { supabase } from '../../lib/supabase'

async function getLinks(): Promise<QuestionnaireLink[]> {
  const { data, error } = await supabase
    .from('questionnaire_links')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching links:', error)
    return []
  }

  return data || []
}

export default async function LinkList() {
  const links = await getLinks()

  return (
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link.id} className="border rounded-md p-4">
          <h3 className="text-lg font-semibold">{link.title}</h3>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Open Questionnaire
          </a>
        </li>
      ))}
    </ul>
  )
}

