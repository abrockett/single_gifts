var quizQuestions = [
  { question: "I am good at taking care of details that other people might neglect.",
    answers: [
      { type: "Administration|0", content: "0 (Never true)" },
      { type: "Administration|1", content: "1" },
      { type: "Administration|2", content: "2" },
      { type: "Administration|3", content: "3" },
      { type: "Administration|4", content: "4" },
      { type: "Administration|5", content: "5 (Always true)" }
    ]
  },
  { question: "I have been successful in starting new ministries.",
    answers: [
      { type: "Apostleship|0", content: "0 (Never true)" },
      { type: "Apostleship|1", content: "1" },
      { type: "Apostleship|2", content: "2" },
      { type: "Apostleship|3", content: "3" },
      { type: "Apostleship|4", content: "4" },
      { type: "Apostleship|5", content: "5 (Always true)" }
    ]
  },
  { question: "God uses my artistic/musical gifts to help people worship him.",
    answers: [
      { type: "Artistic Expression|0", content: "0 (Never true)" },
      { type: "Artistic Expression|1", content: "1" },
      { type: "Artistic Expression|2", content: "2" },
      { type: "Artistic Expression|3", content: "3" },
      { type: "Artistic Expression|4", content: "4" },
      { type: "Artistic Expression|5", content: "5 (Always true)" }
    ]
  },
  { question: "I enjoy working with my hands to create things that facilitate my own or another’s ministry.",
    answers: [
      { type: "Craftsmanship|0", content: "0 (Never true)" },
      { type: "Craftsmanship|1", content: "1" },
      { type: "Craftsmanship|2", content: "2" },
      { type: "Craftsmanship|3", content: "3" },
      { type: "Craftsmanship|4", content: "4" },
      { type: "Craftsmanship|5", content: "5 (Always true)" }
    ]
  },
  { question: "When I hear somebody claim to be teaching from the Bible, I can usually tell whether the teaching is sound or unsound.",
    answers: [
      { type: "Discernment|0", content: "0 (Never true)" },
      { type: "Discernment|1", content: "1" },
      { type: "Discernment|2", content: "2" },
      { type: "Discernment|3", content: "3" },
      { type: "Discernment|4", content: "4" },
      { type: "Discernment|5", content: "5 (Always true)" }
    ]
  },
  { question: "When I talk to non-Christians about Jesus, they are often interested in what I have to say.",
    answers: [
      { type: "Evangelism|0", content: "0 (Never true)" },
      { type: "Evangelism|1", content: "1" },
      { type: "Evangelism|2", content: "2" },
      { type: "Evangelism|3", content: "3" },
      { type: "Evangelism|4", content: "4" },
      { type: "Evangelism|5", content: "5 (Always true)" }
    ]
  },
  { question: "I am able to motivate others to persevere in the face of discouragement and struggles.",
    answers: [
      { type: "Exhortation|0", content: "0 (Never true)" },
      { type: "Exhortation|1", content: "1" },
      { type: "Exhortation|2", content: "2" },
      { type: "Exhortation|3", content: "3" },
      { type: "Exhortation|4", content: "4" },
      { type: "Exhortation|5", content: "5 (Always true)" }
    ]
  },
  { question: "I am more confident than most that God will keep his promises.",
    answers: [
      { type: "Faith|0", content: "0 (Never true)" },
      { type: "Faith|1", content: "1" },
      { type: "Faith|2", content: "2" },
      { type: "Faith|3", content: "3" },
      { type: "Faith|4", content: "4" },
      { type: "Faith|5", content: "5 (Always true)" }
    ]
  },
  { question: "I rearrange things in my life in order to be able to give my financial or other resources more generously to God’s work.",
    answers: [
      { type: "Giving|0", content: "0 (Never true)" },
      { type: "Giving|1", content: "1" },
      { type: "Giving|2", content: "2" },
      { type: "Giving|3", content: "3" },
      { type: "Giving|4", content: "4" },
      { type: "Giving|5", content: "5 (Always true)" }
    ]
  },
  { question: "When there is a job to be done, I am one of the first to jump in and volunteer.",
    answers: [
      { type: "Helps|0", content: "0 (Never true)" },
      { type: "Helps|1", content: "1" },
      { type: "Helps|2", content: "2" },
      { type: "Helps|3", content: "3" },
      { type: "Helps|4", content: "4" },
      { type: "Helps|5", content: "5 (Always true)" }
    ]
  },
  { question: "In gatherings of people, I tend to notice those at the margins and make them feel like they belong.",
    answers: [
      { type: "Hospitality|0", content: "0 (Never true)" },
      { type: "Hospitality|1", content: "1" },
      { type: "Hospitality|2", content: "2" },
      { type: "Hospitality|3", content: "3" },
      { type: "Hospitality|4", content: "4" },
      { type: "Hospitality|5", content: "5 (Always true)" }
    ]
  },
  { question: "People who know me consider me a “prayer warrior.”",
    answers: [
      { type: "Intercession|0", content: "0 (Never true)" },
      { type: "Intercession|1", content: "1" },
      { type: "Intercession|2", content: "2" },
      { type: "Intercession|3", content: "3" },
      { type: "Intercession|4", content: "4" },
      { type: "Intercession|5", content: "5 (Always true)" }
    ]
  },
  { question: "Others look to me for my knowledge of Biblical concepts and/or my insight into situations.",
    answers: [
      { type: "Knowledge|0", content: "0 (Never true)" },
      { type: "Knowledge|1", content: "1" },
      { type: "Knowledge|2", content: "2" },
      { type: "Knowledge|3", content: "3" },
      { type: "Knowledge|4", content: "4" },
      { type: "Knowledge|5", content: "5 (Always true)" }
    ]
  },
  { question: "When the path forward for a group is uncertain, people look to me for leadership.",
    answers: [
      { type: "Leadership|0", content: "0 (Never true)" },
      { type: "Leadership|1", content: "1" },
      { type: "Leadership|2", content: "2" },
      { type: "Leadership|3", content: "3" },
      { type: "Leadership|4", content: "4" },
      { type: "Leadership|5", content: "5 (Always true)" }
    ]
  },
  { question: "Comforting those who are suffering comes naturally to me.",
    answers: [
      { type: "Mercy|0", content: "0 (Never true)" },
      { type: "Mercy|1", content: "1" },
      { type: "Mercy|2", content: "2" },
      { type: "Mercy|3", content: "3" },
      { type: "Mercy|4", content: "4" },
      { type: "Mercy|5", content: "5 (Always true)" }
    ]
  },
  { question: "I often say things that people in the church need to hear, even though it may make them uncomfortable.",
    answers: [
      { type: "Prophecy|0", content: "0 (Never true)" },
      { type: "Prophecy|1", content: "1" },
      { type: "Prophecy|2", content: "2" },
      { type: "Prophecy|3", content: "3" },
      { type: "Prophecy|4", content: "4" },
      { type: "Prophecy|5", content: "5 (Always true)" }
    ]
  },
  { question: "I have been able to successfully guide others in their spiritual journeys.",
    answers: [
      { type: "Shepherding|0", content: "0 (Never true)" },
      { type: "Shepherding|1", content: "1" },
      { type: "Shepherding|2", content: "2" },
      { type: "Shepherding|3", content: "3" },
      { type: "Shepherding|4", content: "4" },
      { type: "Shepherding|5", content: "5 (Always true)" }
    ]
  },
  { question: "I can explain Biblical truth to people in a way that allows them to 'get it'.",
    answers: [
      { type: "Teaching|0", content: "0 (Never true)" },
      { type: "Teaching|1", content: "1" },
      { type: "Teaching|2", content: "2" },
      { type: "Teaching|3", content: "3" },
      { type: "Teaching|4", content: "4" },
      { type: "Teaching|5", content: "5 (Always true)" }
    ]
  },
  { question: "People look to me for counsel when there are decisions to be made.",
    answers: [
      { type: "Wisdom|0", content: "0 (Never true)" },
      { type: "Wisdom|1", content: "1" },
      { type: "Wisdom|2", content: "2" },
      { type: "Wisdom|3", content: "3" },
      { type: "Wisdom|4", content: "4" },
      { type: "Wisdom|5", content: "5 (Always true)" }
    ]
  },
  { question: "When I see people who are sick, I have a strong desire to pray for their healing.",
    answers: [
      { type: "Healing|0", content: "0 (Never true)" },
      { type: "Healing|1", content: "1" },
      { type: "Healing|2", content: "2" },
      { type: "Healing|3", content: "3" },
      { type: "Healing|4", content: "4" },
      { type: "Healing|5", content: "5 (Always true)" }
    ]
  },
  { question: "I have seen God do something miraculous in connection with a prayer I have prayed.",
    answers: [
      { type: "Miraculous Powers|0", content: "0 (Never true)" },
      { type: "Miraculous Powers|1", content: "1" },
      { type: "Miraculous Powers|2", content: "2" },
      { type: "Miraculous Powers|3", content: "3" },
      { type: "Miraculous Powers|4", content: "4" },
      { type: "Miraculous Powers|5", content: "5 (Always true)" }
    ]
  },
  { question: "When I pray, sometimes words come out that I do not understand.",
    answers: [
      { type: "Tongues|0", content: "0 (Never true)" },
      { type: "Tongues|1", content: "1" },
      { type: "Tongues|2", content: "2" },
      { type: "Tongues|3", content: "3" },
      { type: "Tongues|4", content: "4" },
      { type: "Tongues|5", content: "5 (Always true)" }
    ]
  },
  { question: "When someone speaks in Tongues, I am able to understand the message.",
    answers: [
      { type: "Interpretation of Tongues|0", content: "0 (Never true)" },
      { type: "Interpretation of Tongues|1", content: "1" },
      { type: "Interpretation of Tongues|2", content: "2" },
      { type: "Interpretation of Tongues|3", content: "3" },
      { type: "Interpretation of Tongues|4", content: "4" },
      { type: "Interpretation of Tongues|5", content: "5 (Always true)" }
    ]
  },
  { question: "Others look to me for my organizational skills.",
    answers: [
      { type: "Administration|0", content: "0 (Never true)" },
      { type: "Administration|1", content: "1" },
      { type: "Administration|2", content: "2" },
      { type: "Administration|3", content: "3" },
      { type: "Administration|4", content: "4" },
      { type: "Administration|5", content: "5 (Always true)" }
    ]
  },
  { question: "When I see a need in the church or community, I envision how to create a ministry to meet the need.",
    answers: [
      { type: "Apostleship|0", content: "0 (Never true)" },
      { type: "Apostleship|1", content: "1" },
      { type: "Apostleship|2", content: "2" },
      { type: "Apostleship|3", content: "3" },
      { type: "Apostleship|4", content: "4" },
      { type: "Apostleship|5", content: "5 (Always true)" }
    ]
  },
  { question: "I can communicate important things about God to others through creative writing, art, or music.",
    answers: [
      { type: "Artistic Expression|0", content: "0 (Never true)" },
      { type: "Artistic Expression|1", content: "1" },
      { type: "Artistic Expression|2", content: "2" },
      { type: "Artistic Expression|3", content: "3" },
      { type: "Artistic Expression|4", content: "4" },
      { type: "Artistic Expression|5", content: "5 (Always true)" }
    ]
  },
  { question: "I am skilled at creating useful items from materials such as glass, metal, wood, paper, etc.",
    answers: [
      { type: "Craftsmanship|0", content: "0 (Never true)" },
      { type: "Craftsmanship|1", content: "1" },
      { type: "Craftsmanship|2", content: "2" },
      { type: "Craftsmanship|3", content: "3" },
      { type: "Craftsmanship|4", content: "4" },
      { type: "Craftsmanship|5", content: "5 (Always true)" }
    ]
  },
  { question: "I can tell when there is spiritual evil in a situation.",
    answers: [
      { type: "Discernment|0", content: "0 (Never true)" },
      { type: "Discernment|1", content: "1" },
      { type: "Discernment|2", content: "2" },
      { type: "Discernment|3", content: "3" },
      { type: "Discernment|4", content: "4" },
      { type: "Discernment|5", content: "5 (Always true)" }
    ]
  },
  { question: "Sharing the Gospel comes easily to me.",
    answers: [
      { type: "Evangelism|0", content: "0 (Never true)" },
      { type: "Evangelism|1", content: "1" },
      { type: "Evangelism|2", content: "2" },
      { type: "Evangelism|3", content: "3" },
      { type: "Evangelism|4", content: "4" },
      { type: "Evangelism|5", content: "5 (Always true)" }
    ]
  },
  { question: "People think of me as an encouraging friend.",
    answers: [
      { type: "Exhortation|0", content: "0 (Never true)" },
      { type: "Exhortation|1", content: "1" },
      { type: "Exhortation|2", content: "2" },
      { type: "Exhortation|3", content: "3" },
      { type: "Exhortation|4", content: "4" },
      { type: "Exhortation|5", content: "5 (Always true)" }
    ]
  },
  { question: "In the face of doubt or uncertainty, I persevere in doing the things God has called me to do.",
    answers: [
      { type: "Faith|0", content: "0 (Never true)" },
      { type: "Faith|1", content: "1" },
      { type: "Faith|2", content: "2" },
      { type: "Faith|3", content: "3" },
      { type: "Faith|4", content: "4" },
      { type: "Faith|5", content: "5 (Always true)" }
    ]
  },
  { question: " I frequently look for opportunities to contribute money or resources in a way that makes a difference.",
    answers: [
      { type: "Giving|0", content: "0 (Never true)" },
      { type: "Giving|1", content: "1" },
      { type: "Giving|2", content: "2" },
      { type: "Giving|3", content: "3" },
      { type: "Giving|4", content: "4" },
      { type: "Giving|5", content: "5 (Always true)" }
    ]
  },
  { question: "I do not particularly care what I’m doing to serve, as long as it helps further God’s work in the church or the world.",
    answers: [
      { type: "Helps|0", content: "0 (Never true)" },
      { type: "Helps|1", content: "1" },
      { type: "Helps|2", content: "2" },
      { type: "Helps|3", content: "3" },
      { type: "Helps|4", content: "4" },
      { type: "Helps|5", content: "5 (Always true)" }
    ]
  },
  { question: "Either in my home or elsewhere, I create a welcoming atmosphere for people to gather.",
    answers: [
      { type: "Hospitality|0", content: "0 (Never true)" },
      { type: "Hospitality|1", content: "1" },
      { type: "Hospitality|2", content: "2" },
      { type: "Hospitality|3", content: "3" },
      { type: "Hospitality|4", content: "4" },
      { type: "Hospitality|5", content: "5 (Always true)" }
    ]
  },
  { question: "When I learn about somebody in a difficult situation, my first impulse is to pray.",
    answers: [
      { type: "Intercession|0", content: "0 (Never true)" },
      { type: "Intercession|1", content: "1" },
      { type: "Intercession|2", content: "2" },
      { type: "Intercession|3", content: "3" },
      { type: "Intercession|4", content: "4" },
      { type: "Intercession|5", content: "5 (Always true)" }
    ]
  },
  { question: "I see the shades of gray in situations where others see black and white.",
    answers: [
      { type: "Knowledge|0", content: "0 (Never true)" },
      { type: "Knowledge|1", content: "1" },
      { type: "Knowledge|2", content: "2" },
      { type: "Knowledge|3", content: "3" },
      { type: "Knowledge|4", content: "4" },
      { type: "Knowledge|5", content: "5 (Always true)" }
    ]
  },
  { question: "I motivate others to come along with me as I pursue God’s vision.",
    answers: [
      { type: "Leadership|0", content: "0 (Never true)" },
      { type: "Leadership|1", content: "1" },
      { type: "Leadership|2", content: "2" },
      { type: "Leadership|3", content: "3" },
      { type: "Leadership|4", content: "4" },
      { type: "Leadership|5", content: "5 (Always true)" }
    ]
  },
  { question: "My automatic response when someone is hurting is to come alongside and offer a listening ear and a shoulder to cry on.",
    answers: [
      { type: "Mercy|0", content: "0 (Never true)" },
      { type: "Mercy|1", content: "1" },
      { type: "Mercy|2", content: "2" },
      { type: "Mercy|3", content: "3" },
      { type: "Mercy|4", content: "4" },
      { type: "Mercy|5", content: "5 (Always true)" }
    ]
  },
  { question: "God sometimes leads me to ask difficult questions and point out inconvenient truths.",
    answers: [
      { type: "Prophecy|0", content: "0 (Never true)" },
      { type: "Prophecy|1", content: "1" },
      { type: "Prophecy|2", content: "2" },
      { type: "Prophecy|3", content: "3" },
      { type: "Prophecy|4", content: "4" },
      { type: "Prophecy|5", content: "5 (Always true)" }
    ]
  },
  { question: "I enjoy coming alongside someone in one-on-one mentoring.",
    answers: [
      { type: "Shepherding|0", content: "0 (Never true)" },
      { type: "Shepherding|1", content: "1" },
      { type: "Shepherding|2", content: "2" },
      { type: "Shepherding|3", content: "3" },
      { type: "Shepherding|4", content: "4" },
      { type: "Shepherding|5", content: "5 (Always true)" }
    ]
  },
  { question: "I am able to connect God’s truth with today’s life situations.",
    answers: [
      { type: "Teaching|0", content: "0 (Never true)" },
      { type: "Teaching|1", content: "1" },
      { type: "Teaching|2", content: "2" },
      { type: "Teaching|3", content: "3" },
      { type: "Teaching|4", content: "4" },
      { type: "Teaching|5", content: "5 (Always true)" }
    ]
  },
  { question: "I can usually see the wise course of action to take.",
    answers: [
      { type: "Wisdom|0", content: "0 (Never true)" },
      { type: "Wisdom|1", content: "1" },
      { type: "Wisdom|2", content: "2" },
      { type: "Wisdom|3", content: "3" },
      { type: "Wisdom|4", content: "4" },
      { type: "Wisdom|5", content: "5 (Always true)" }
    ]
  },
  { question: "I have seen God heal someone in connection with a prayer I have prayed or by my laying on of hands.",
    answers: [
      { type: "Healing|0", content: "0 (Never true)" },
      { type: "Healing|1", content: "1" },
      { type: "Healing|2", content: "2" },
      { type: "Healing|3", content: "3" },
      { type: "Healing|4", content: "4" },
      { type: "Healing|5", content: "5 (Always true)" }
    ]
  },
  { question: "I have sometimes felt powerfully led by God to perform an extraordinary act.",
    answers: [
      { type: "Miraculous Powers|0", content: "0 (Never true)" },
      { type: "Miraculous Powers|1", content: "1" },
      { type: "Miraculous Powers|2", content: "2" },
      { type: "Miraculous Powers|3", content: "3" },
      { type: "Miraculous Powers|4", content: "4" },
      { type: "Miraculous Powers|5", content: "5 (Always true)" }
    ]
  },
  { question: "Praying privately in tongues builds my personal faith and helps me feel closer to God.",
    answers: [
      { type: "Tongues|0", content: "0 (Never true)" },
      { type: "Tongues|1", content: "1" },
      { type: "Tongues|2", content: "2" },
      { type: "Tongues|3", content: "3" },
      { type: "Tongues|4", content: "4" },
      { type: "Tongues|5", content: "5 (Always true)" }
    ]
  },
  { question: " I am able to provide the meaning of a message of Tongues to others present.",
    answers: [
      { type: "Interpretation of Tongues|0", content: "0 (Never true)" },
      { type: "Interpretation of Tongues|1", content: "1" },
      { type: "Interpretation of Tongues|2", content: "2" },
      { type: "Interpretation of Tongues|3", content: "3" },
      { type: "Interpretation of Tongues|4", content: "4" },
      { type: "Interpretation of Tongues|5", content: "5 (Always true)" }
    ]
  },
  { question: "If somebody has a good vision, I can do the work of putting it into practice.",
    answers: [
      { type: "Administration|0", content: "0 (Never true)" },
      { type: "Administration|1", content: "1" },
      { type: "Administration|2", content: "2" },
      { type: "Administration|3", content: "3" },
      { type: "Administration|4", content: "4" },
      { type: "Administration|5", content: "5 (Always true)" }
    ]
  },
  { question: "I have been told I exhibit an entrepreneurial capacity.",
    answers: [
      { type: "Apostleship|0", content: "0 (Never true)" },
      { type: "Apostleship|1", content: "1" },
      { type: "Apostleship|2", content: "2" },
      { type: "Apostleship|3", content: "3" },
      { type: "Apostleship|4", content: "4" },
      { type: "Apostleship|5", content: "5 (Always true)" }
    ]
  },
  { question: "I express something of God’s creativity through dance, imaginative communication, painting, drawing, or drama.",
    answers: [
      { type: "Artistic Expression|0", content: "0 (Never true)" },
      { type: "Artistic Expression|1", content: "1" },
      { type: "Artistic Expression|2", content: "2" },
      { type: "Artistic Expression|3", content: "3" },
      { type: "Artistic Expression|4", content: "4" },
      { type: "Artistic Expression|5", content: "5 (Always true)" }
    ]
  },
  { question: "Others depend on me to make or fix things.",
    answers: [
      { type: "Craftsmanship|0", content: "0 (Never true)" },
      { type: "Craftsmanship|1", content: "1" },
      { type: "Craftsmanship|2", content: "2" },
      { type: "Craftsmanship|3", content: "3" },
      { type: "Craftsmanship|4", content: "4" },
      { type: "Craftsmanship|5", content: "5 (Always true)" }
    ]
  },
  { question: "Others have told me that I have a strong intuitive sense, seeing dangers or opportunities that others miss.",
    answers: [
      { type: "Discernment|0", content: "0 (Never true)" },
      { type: "Discernment|1", content: "1" },
      { type: "Discernment|2", content: "2" },
      { type: "Discernment|3", content: "3" },
      { type: "Discernment|4", content: "4" },
      { type: "Discernment|5", content: "5 (Always true)" }
    ]
  },
  { question: "I actively develop relationships with and reach out to those outside the church community.",
    answers: [
      { type: "Evangelism|0", content: "0 (Never true)" },
      { type: "Evangelism|1", content: "1" },
      { type: "Evangelism|2", content: "2" },
      { type: "Evangelism|3", content: "3" },
      { type: "Evangelism|4", content: "4" },
      { type: "Evangelism|5", content: "5 (Always true)" }
    ]
  },
  { question: "I enjoy helping people take steps toward greater maturity in any aspect of their lives.",
    answers: [
      { type: "Exhortation|0", content: "0 (Never true)" },
      { type: "Exhortation|1", content: "1" },
      { type: "Exhortation|2", content: "2" },
      { type: "Exhortation|3", content: "3" },
      { type: "Exhortation|4", content: "4" },
      { type: "Exhortation|5", content: "5 (Always true)" }
    ]
  },
  { question: "In situations where others might doubt God, I do not.",
    answers: [
      { type: "Faith|0", content: "0 (Never true)" },
      { type: "Faith|1", content: "1" },
      { type: "Faith|2", content: "2" },
      { type: "Faith|3", content: "3" },
      { type: "Faith|4", content: "4" },
      { type: "Faith|5", content: "5 (Always true)" }
    ]
  },
  { question: "Although my generosity is usually meant to be anonymous, people know me as charitable and philanthropic with the resources God has given me.",
    answers: [
      { type: "Giving|0", content: "0 (Never true)" },
      { type: "Giving|1", content: "1" },
      { type: "Giving|2", content: "2" },
      { type: "Giving|3", content: "3" },
      { type: "Giving|4", content: "4" },
      { type: "Giving|5", content: "5 (Always true)" }
    ]
  },
  { question: "I enjoy doing the behind-the-scenes things that support others’ ministries.",
    answers: [
      { type: "Helps|0", content: "0 (Never true)" },
      { type: "Helps|1", content: "1" },
      { type: "Helps|2", content: "2" },
      { type: "Helps|3", content: "3" },
      { type: "Helps|4", content: "4" },
      { type: "Helps|5", content: "5 (Always true)" }
    ]
  },
  { question: "Others have noticed that I am good at making people feel welcome and accepted wherever I go.",
    answers: [
      { type: "Hospitality|0", content: "0 (Never true)" },
      { type: "Hospitality|1", content: "1" },
      { type: "Hospitality|2", content: "2" },
      { type: "Hospitality|3", content: "3" },
      { type: "Hospitality|4", content: "4" },
      { type: "Hospitality|5", content: "5 (Always true)" }
    ]
  },
  { question: "I am one of the first people others turn to when asking for prayer.",
    answers: [
      { type: "Intercession|0", content: "0 (Never true)" },
      { type: "Intercession|1", content: "1" },
      { type: "Intercession|2", content: "2" },
      { type: "Intercession|3", content: "3" },
      { type: "Intercession|4", content: "4" },
      { type: "Intercession|5", content: "5 (Always true)" }
    ]
  },
  { question: "I often see important aspects of Biblical passages that others do not recognize.",
    answers: [
      { type: "Knowledge|0", content: "0 (Never true)" },
      { type: "Knowledge|1", content: "1" },
      { type: "Knowledge|2", content: "2" },
      { type: "Knowledge|3", content: "3" },
      { type: "Knowledge|4", content: "4" },
      { type: "Knowledge|5", content: "5 (Always true)" }
    ]
  },
  { question: "I inspire others to pursue goals that I clearly articulate.",
    answers: [
      { type: "Leadership|0", content: "0 (Never true)" },
      { type: "Leadership|1", content: "1" },
      { type: "Leadership|2", content: "2" },
      { type: "Leadership|3", content: "3" },
      { type: "Leadership|4", content: "4" },
      { type: "Leadership|5", content: "5 (Always true)" }
    ]
  },
  { question: "People describe me as compassionate and empathic.",
    answers: [
      { type: "Mercy|0", content: "0 (Never true)" },
      { type: "Mercy|1", content: "1" },
      { type: "Mercy|2", content: "2" },
      { type: "Mercy|3", content: "3" },
      { type: "Mercy|4", content: "4" },
      { type: "Mercy|5", content: "5 (Always true)" }
    ]
  },
  { question: "God uses me to point out his plans and purposes when others may be straying from the path.",
    answers: [
      { type: "Prophecy|0", content: "0 (Never true)" },
      { type: "Prophecy|1", content: "1" },
      { type: "Prophecy|2", content: "2" },
      { type: "Prophecy|3", content: "3" },
      { type: "Prophecy|4", content: "4" },
      { type: "Prophecy|5", content: "5 (Always true)" }
    ]
  },
  { question: "I find satisfaction in long-term coaching relationships.",
    answers: [
      { type: "Shepherding|0", content: "0 (Never true)" },
      { type: "Shepherding|1", content: "1" },
      { type: "Shepherding|2", content: "2" },
      { type: "Shepherding|3", content: "3" },
      { type: "Shepherding|4", content: "4" },
      { type: "Shepherding|5", content: "5 (Always true)" }
    ]
  },
  { question: "Others have consistently said that they have learned from or been challenged by my teaching.",
    answers: [
      { type: "Teaching|0", content: "0 (Never true)" },
      { type: "Teaching|1", content: "1" },
      { type: "Teaching|2", content: "2" },
      { type: "Teaching|3", content: "3" },
      { type: "Teaching|4", content: "4" },
      { type: "Teaching|5", content: "5 (Always true)" }
    ]
  },
  { question: "I am rarely confused about what next steps to take in challenging situations.",
    answers: [
      { type: "Wisdom|0", content: "0 (Never true)" },
      { type: "Wisdom|1", content: "1" },
      { type: "Wisdom|2", content: "2" },
      { type: "Wisdom|3", content: "3" },
      { type: "Wisdom|4", content: "4" },
      { type: "Wisdom|5", content: "5 (Always true)" }
    ]
  },
  { question: "I am drawn to participate in ministries like 'inner healing prayer' or 'spiritual deliverance healing.'",
    answers: [
      { type: "Healing|0", content: "0 (Never true)" },
      { type: "Healing|1", content: "1" },
      { type: "Healing|2", content: "2" },
      { type: "Healing|3", content: "3" },
      { type: "Healing|4", content: "4" },
      { type: "Healing|5", content: "5 (Always true)" }
    ]
  },
  { question: "God has authenticated a message or ministry by working through me to perform something supernatural.",
    answers: [
      { type: "Miraculous Powers|0", content: "0 (Never true)" },
      { type: "Miraculous Powers|1", content: "1" },
      { type: "Miraculous Powers|2", content: "2" },
      { type: "Miraculous Powers|3", content: "3" },
      { type: "Miraculous Powers|4", content: "4" },
      { type: "Miraculous Powers|5", content: "5 (Always true)" }
    ]
  },
  { question: "I have spoken about faith in a language that is not my native tongue, and felt like God was enabling my fluency.",
    answers: [
      { type: "Tongues|0", content: "0 (Never true)" },
      { type: "Tongues|1", content: "1" },
      { type: "Tongues|2", content: "2" },
      { type: "Tongues|3", content: "3" },
      { type: "Tongues|4", content: "4" },
      { type: "Tongues|5", content: "5 (Always true)" }
    ]
  },
  { question: "If someone prays in Tongues, I get a feeling or vision or picture of what the message means.",
    answers: [
      { type: "Interpretation of Tongues|0", content: "0 (Never true)" },
      { type: "Interpretation of Tongues|1", content: "1" },
      { type: "Interpretation of Tongues|2", content: "2" },
      { type: "Interpretation of Tongues|3", content: "3" },
      { type: "Interpretation of Tongues|4", content: "4" },
      { type: "Interpretation of Tongues|5", content: "5 (Always true)" }
    ]
  }
];

export default quizQuestions;
