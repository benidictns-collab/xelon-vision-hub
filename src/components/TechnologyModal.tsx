import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Layers, Zap, Shield, TrendingUp } from "lucide-react";

interface TechnologyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TechnologyModal = ({ open, onOpenChange }: TechnologyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Технология цифровых плоскопанельных детекторов
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            Инновационные решения для медицинской, промышленной и специализированной визуализации
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="medical">Медицина</TabsTrigger>
            <TabsTrigger value="industrial">Промышленность</TabsTrigger>
            <TabsTrigger value="advantages">Преимущества</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Layers className="h-5 w-5 text-accent" />
                Что такое ЦПД?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Цифровой плоскопанельный детектор (ЦПД) — это современное устройство для получения 
                рентгеновских изображений высокого качества. В отличие от традиционной пленочной 
                рентгенографии, ЦПД преобразует рентгеновское излучение непосредственно в цифровой 
                сигнал, что позволяет получать изображения мгновенно и с высокой точностью.
              </p>
            </div>

            <div className="bg-accent/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Принцип работы</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Сцинтилляционный слой:</strong> Преобразует рентгеновские лучи в видимый свет
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Фотодиодная матрица:</strong> Преобразует световые сигналы в электрические импульсы
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Электронная обработка:</strong> Формирует цифровое изображение высокого разрешения
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Передача данных:</strong> Мгновенная отправка изображения на компьютер
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Технические характеристики</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Разрешение</div>
                  <div className="text-lg font-semibold">до 200 мкм</div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Частота кадров</div>
                  <div className="text-lg font-semibold">до 30 fps</div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Размеры панели</div>
                  <div className="text-lg font-semibold">17×17 до 43×43 см</div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Динамический диапазон</div>
                  <div className="text-lg font-semibold">14 бит</div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="medical" className="space-y-6 mt-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                Применение в медицине
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                ЦПД революционизируют медицинскую диагностику, обеспечивая высокое качество 
                изображений при минимальной дозе облучения пациента.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Рентгенография</h4>
                  <p className="text-sm text-muted-foreground">
                    Цифровая рентгенография грудной клетки, костей, суставов. Мгновенное получение 
                    изображений высокого качества, возможность цифровой обработки и архивирования.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Маммография</h4>
                  <p className="text-sm text-muted-foreground">
                    Раннее обнаружение патологий молочной железы с высокой чувствительностью 
                    и специфичностью при минимальной лучевой нагрузке.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Флюороскопия</h4>
                  <p className="text-sm text-muted-foreground">
                    Динамическая визуализация в режиме реального времени для хирургических 
                    вмешательств и диагностических процедур.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Стоматология</h4>
                  <p className="text-sm text-muted-foreground">
                    Интраоральная и панорамная съемка с высокой детализацией для точной 
                    диагностики стоматологических заболеваний.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/5 rounded-lg p-6">
              <h4 className="font-semibold mb-3">Преимущества для медицины</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-sm">Снижение дозы облучения пациента до 70%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-sm">Мгновенное получение изображений (менее 5 секунд)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-sm">Повышение качества диагностики</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-sm">Интеграция с медицинскими информационными системами</span>
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="industrial" className="space-y-6 mt-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                Промышленное применение
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                ЦПД широко используются в промышленном неразрушающем контроле для обеспечения 
                качества и безопасности продукции.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Контроль сварных соединений</h4>
                  <p className="text-sm text-muted-foreground">
                    Обнаружение дефектов сварки (поры, трещины, непровары) в трубопроводах, 
                    резервуарах, строительных конструкциях с высокой точностью.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Аэрокосмическая промышленность</h4>
                  <p className="text-sm text-muted-foreground">
                    Контроль качества композитных материалов, лопаток турбин, сварных швов 
                    авиационных конструкций с требованиями высочайшей надежности.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Автомобилестроение</h4>
                  <p className="text-sm text-muted-foreground">
                    Контроль литья, сварки кузовов, проверка деталей двигателя на наличие 
                    внутренних дефектов на конвейерных линиях.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Энергетика</h4>
                  <p className="text-sm text-muted-foreground">
                    Инспекция трубопроводов, сварных соединений в атомной и тепловой энергетике 
                    для предотвращения аварийных ситуаций.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Досмотровые системы</h4>
                  <p className="text-sm text-muted-foreground">
                    Контроль грузов, багажа в аэропортах и на таможне, обеспечение безопасности 
                    критически важных объектов.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/5 rounded-lg p-6">
              <h4 className="font-semibold mb-3">Промышленные преимущества</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-sm">Увеличение скорости контроля в 5-10 раз</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-sm">Возможность автоматизации и AI-анализа дефектов</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-sm">Цифровое хранение результатов контроля</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-sm">Снижение эксплуатационных расходов</span>
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="advantages" className="space-y-6 mt-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Ключевые преимущества технологии
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-5 hover:border-accent transition-colors">
                <h4 className="font-semibold mb-2 text-accent">Высокое качество изображений</h4>
                <p className="text-sm text-muted-foreground">
                  Разрешение до 200 мкм и 14-битная глубина цвета обеспечивают превосходную 
                  детализацию для точной диагностики.
                </p>
              </div>

              <div className="border rounded-lg p-5 hover:border-accent transition-colors">
                <h4 className="font-semibold mb-2 text-accent">Мгновенная визуализация</h4>
                <p className="text-sm text-muted-foreground">
                  Получение изображения за секунды вместо минут, ускорение рабочего процесса 
                  и повышение производительности.
                </p>
              </div>

              <div className="border rounded-lg p-5 hover:border-accent transition-colors">
                <h4 className="font-semibold mb-2 text-accent">Низкая доза облучения</h4>
                <p className="text-sm text-muted-foreground">
                  Снижение дозы облучения до 70% по сравнению с традиционными методами при 
                  сохранении качества изображения.
                </p>
              </div>

              <div className="border rounded-lg p-5 hover:border-accent transition-colors">
                <h4 className="font-semibold mb-2 text-accent">Экономическая эффективность</h4>
                <p className="text-sm text-muted-foreground">
                  Отсутствие расходных материалов (пленка, химикаты), снижение операционных 
                  расходов на 40-60%.
                </p>
              </div>

              <div className="border rounded-lg p-5 hover:border-accent transition-colors">
                <h4 className="font-semibold mb-2 text-accent">Цифровая интеграция</h4>
                <p className="text-sm text-muted-foreground">
                  Легкая интеграция с PACS, HIS, ERP системами, облачное хранение и удаленный 
                  доступ к изображениям.
                </p>
              </div>

              <div className="border rounded-lg p-5 hover:border-accent transition-colors">
                <h4 className="font-semibold mb-2 text-accent">Долговечность</h4>
                <p className="text-sm text-muted-foreground">
                  Срок службы более 10 лет, устойчивость к механическим воздействиям, 
                  минимальные требования к обслуживанию.
                </p>
              </div>

              <div className="border rounded-lg p-5 hover:border-accent transition-colors">
                <h4 className="font-semibold mb-2 text-accent">Экологичность</h4>
                <p className="text-sm text-muted-foreground">
                  Отсутствие химических отходов, снижение энергопотребления, соответствие 
                  экологическим стандартам.
                </p>
              </div>

              <div className="border rounded-lg p-5 hover:border-accent transition-colors">
                <h4 className="font-semibold mb-2 text-accent">Российское производство</h4>
                <p className="text-sm text-muted-foreground">
                  70% отечественных компонентов, полный производственный цикл, техническая 
                  поддержка и гарантия качества.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-6 border border-accent/20">
              <h4 className="font-semibold mb-3">Инновации и развитие</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Наша компания постоянно совершенствует технологию ЦПД, инвестируя в исследования 
                и разработки. Мы работаем над повышением разрешения, увеличением скорости 
                обработки изображений и интеграцией искусственного интеллекта для автоматического 
                анализа дефектов и патологий.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">100+</div>
                  <div className="text-xs text-muted-foreground">инженеров в R&D</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">15+</div>
                  <div className="text-xs text-muted-foreground">лет разработки</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">50+</div>
                  <div className="text-xs text-muted-foreground">патентов</div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default TechnologyModal;
