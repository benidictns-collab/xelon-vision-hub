import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Александр Петров",
      position: "Генеральный директор",
      department: "Руководство",
      experience: "15+ лет",
      description: "Эксперт в области медицинской техники и цифровых технологий"
    },
    {
      name: "Елена Смирнова",
      position: "Технический директор",
      department: "R&D",
      experience: "12+ лет",
      description: "Специалист по разработке детекторов и алгоритмам обработки изображений"
    },
    {
      name: "Михаил Иванов",
      position: "Директор по продажам",
      department: "Продажи",
      experience: "10+ лет",
      description: "Эксперт по медицинскому и промышленному оборудованию"
    },
    {
      name: "Анна Козлова",
      position: "Руководитель отдела качества",
      department: "Качество",
      experience: "8+ лет",
      description: "Специалист по сертификации и контролю качества медицинских изделий"
    },
    {
      name: "Дмитрий Волков",
      position: "Ведущий инженер",
      department: "R&D",
      experience: "7+ лет",
      description: "Разработчик аппаратного и программного обеспечения детекторов"
    },
    {
      name: "Ольга Федорова",
      position: "Менеджер по маркетингу",
      department: "Маркетинг",
      experience: "6+ лет",
      description: "Специалист по продвижению медицинских технологий"
    }
  ];

  const departments = ["Все", "Руководство", "R&D", "Продажи", "Качество", "Маркетинг"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Наша команда
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Профессионалы, создающие будущее цифровой визуализации
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <div className="flex justify-center space-x-2 mb-3">
                    <Badge variant="secondary">{member.department}</Badge>
                    <Badge variant="outline">{member.experience}</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm text-center mb-4">
                  {member.description}
                </p>
                <div className="flex justify-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer" />
                  <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к нашей команде</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Мы всегда ищем талантливых специалистов, готовых развивать передовые технологии
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="outline" className="text-sm px-4 py-2">
              Инженеры R&D
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              Специалисты по качеству
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              Менеджеры по продажам
            </Badge>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;