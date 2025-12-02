// This is a placeholder for a CMS client
// In a real application, you would connect to your CMS here (e.g., Sanity, Contentful, Strapi)

export async function getCMSData(query: string) {
  // Simulate fetching data from a CMS
  console.log('Fetching data from CMS with query:', query);
  
  // Return mock data
  return {
    data: null,
    error: null
  };
}

export async function getServices() {
  // Civil engineering and contracting services
  return [
    {
      id: 'civil-engineering',
      title: 'Civil Engineering',
      description: 'Comprehensive civil engineering solutions including road construction, bridges, drainage systems, and structural works.',
      slug: 'civil-engineering'
    },
    {
      id: 'electrical-engineering',
      title: 'Electrical Engineering',
      description: 'Professional electrical installation, maintenance, and power distribution systems for industrial and commercial projects.',
      slug: 'electrical-engineering'
    },
    {
      id: 'oil-field-services',
      title: 'Oil Field Services',
      description: 'Specialized services for oil and gas sector including site preparation, equipment installation, and maintenance.',
      slug: 'oil-field-services'
    },
    {
      id: 'general-contracting',
      title: 'General Contracting',
      description: 'Complete project management and construction services from planning to execution and delivery.',
      slug: 'general-contracting'
    },
    {
      id: 'building-construction',
      title: 'Building Construction',
      description: 'Residential and commercial building construction with focus on quality, safety, and timely delivery.',
      slug: 'building-construction'
    },
    {
      id: 'infrastructure-development',
      title: 'Infrastructure Development',
      description: 'Large-scale infrastructure projects including roads, water systems, and public facilities.',
      slug: 'infrastructure-development'
    }
  ];
}

export async function getProjects() {
  // Civil engineering and construction projects
  return [
    {
      id: '1',
      title: 'Federal Housing Estate Road Network',
      description: 'Complete road construction and drainage system for Federal Housing Estate Egbeda, Owerri.',
      image: '/assets/illustrations/project1.jpg',
      slug: 'federal-housing-estate-roads'
    },
    {
      id: '2',
      title: 'Oil Field Site Development',
      description: 'Site preparation and infrastructure development for major oil field operations in the Niger Delta.',
      image: '/assets/illustrations/project2.jpg',
      slug: 'oil-field-site-development'
    },
    {
      id: '3',
      title: 'Commercial Building Complex',
      description: 'Multi-story commercial complex with comprehensive electrical and structural engineering in Owerri.',
      image: '/assets/illustrations/project3.jpg',
      slug: 'commercial-building-complex'
    },
    {
      id: '4',
      title: 'Public Infrastructure Development',
      description: 'Water supply system and public facility construction for local government development project in Imo State.',
      image: '/assets/illustrations/project4.jpg',
      slug: 'public-infrastructure-development'
    }
  ];
}

export async function getBlogPosts() {
  // Civil engineering and construction blog posts
  return [
    {
      id: '1',
      title: 'Best Practices in Road Construction in Nigeria',
      excerpt: 'Exploring modern techniques and standards for durable road infrastructure in Nigerian climate conditions.',
      date: '2025-10-15',
      author: 'Nnajiofor Alex O.',
      tags: ['Civil Engineering', 'Road Construction', 'Infrastructure'],
      slug: 'best-practices-road-construction-nigeria'
    },
    {
      id: '2',
      title: 'Safety Standards in Oil Field Operations',
      excerpt: 'Essential safety protocols and equipment requirements for oil field service operations.',
      date: '2025-09-22',
      author: 'Nnajiofor Jerry O.',
      tags: ['Oil Field Services', 'Safety', 'Best Practices'],
      slug: 'safety-standards-oil-field-operations'
    },
    {
      id: '3',
      title: 'Sustainable Building Practices for Nigerian Climate',
      excerpt: 'How to incorporate sustainable and energy-efficient designs in building construction projects.',
      date: '2025-08-30',
      author: 'Nnajiofor Alex O.',
      tags: ['Building Construction', 'Sustainability', 'Engineering'],
      slug: 'sustainable-building-practices-nigerian-climate'
    }
  ];
}

export async function getTeamMembers() {
  // Company directors and team
  return [
    {
      id: '1',
      name: 'Nnajiofor Alex O.',
      role: 'Director',
      bio: 'Experienced civil engineer with extensive expertise in construction management and project delivery.',
      image: '/assets/illustrations/team1.jpg',
      slug: 'nnajiofor-alex'
    },
    {
      id: '2',
      name: 'Nnajiofor Jerry O.',
      role: 'Director',
      bio: 'Specialist in electrical engineering and oil field services with proven track record in complex projects.',
      image: '/assets/illustrations/team2.jpg',
      slug: 'nnajiofor-jerry'
    }
  ];
}